// O(n) time, where n = number of nodes in topManager tree
// O(h) space, where h = height of topManager tree

function getLowestCommonManager(topManager, reportOne, reportTwo) {

  let lcm;
  let lcmFound = false;

  function recurse(node) {

    let managesReportOne = false;
    let managesReportTwo = false;

    if (node === reportOne) {
      managesReportOne = true;
    }
    if (node === reportTwo) {
      managesReportTwo = true;
    }
    if (node.directReports.length === 0 && !managesReportOne && !managesReportTwo) return null;
    else {
      for (const report of node.directReports) {
        if (recurse(report) === 'reportOneManaged') {
          managesReportOne = true;
        } else if (recurse(report) === 'reportTwoManaged') {
          managesReportTwo = true;
        }
      }
    }
    if (managesReportOne && managesReportTwo && !lcmFound) {
      lcm = node;
      lcmFound = true;
    } else {
      if (managesReportOne) return 'reportOneManaged';
      if (managesReportTwo) return 'reportTwoManaged';
      else return null;
    }
  }

  recurse(topManager);
  return lcm;
}

class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}