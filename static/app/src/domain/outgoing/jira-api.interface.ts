

//Interface to do dependency inversion
export interface IJiraApi {

  getIssueData: (key: string) => Promise<any>;
  getIssueDataByInvoke: (key: string) => Promise<any>;
  searchJql: (jql: string) => Promise<any>;
  
};