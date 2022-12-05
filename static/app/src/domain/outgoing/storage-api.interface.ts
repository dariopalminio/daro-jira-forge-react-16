

//Interface to do dependency inversion
export interface IStorageApi {

    getConfigStorage: () => Promise<any>;
    setConfigStorage: () => Promise<any>;

    
  };        