// function to convert all data points to MB
const convertToMb = (stringBytes) => {
  if (stringBytes.slice(-2) === 'kB') return parseFloat((stringBytes.slice(0, -2) / 1024).toFixed(4));
  if (stringBytes.slice(-2) === 'MB') return parseFloat(stringBytes.slice(0, -2));
  if (stringBytes.slice(-2) === 'GB') return parseFloat((stringBytes.slice(0, -2) * 1024).toFixed(4));
  else return parseFloat((stringBytes.slice(0, -1) / 1048476).toFixed(4));
};

const trimAndSplit = (metrics, indx) => {
  return metrics.split('/')[indx].replace(/\s+/g, '');
};

module.exports = {
  // function to parse incoming data for numeric values and displaying them consistently
  parseStats: (containerStats) => {
    const parsedStats = {};
    for (let i = 0; i < containerStats.length; i ++) {
      parsedStats.container_name = containerStats[i].name;
      parsedStats.container_id = containerStats[i].id;
      parsedStats.cpu_percent = parseFloat(containerStats[i].cpu_percent.replace(/([%])+/g, ''));
      parsedStats.avg_cpu = parseFloat(containerStats[i].avg_cpu.replace(/([%])+/g, ''));
      parsedStats.mem_usage = convertToMb(trimAndSplit(containerStats[i].mem_usage, 0));
      parsedStats.mem_limit = convertToMb(trimAndSplit(containerStats[i].mem_usage, 1));
      parsedStats.mem_percent = parseFloat(containerStats[i].mem_percent.replace(/([%])+/g, ''));
      parsedStats.net_input = convertToMb(trimAndSplit(containerStats[i].net_io, 0));
      parsedStats.net_output = convertToMb(trimAndSplit(containerStats[i].net_io, 1));
      parsedStats.block_input = convertToMb(trimAndSplit(containerStats[i].block_io, 0));
      parsedStats.block_output = convertToMb(trimAndSplit(containerStats[i].block_io, 1));
      parsedStats.pids = parseFloat(containerStats[i].pids);
    }
    return parsedStats;
  }
};