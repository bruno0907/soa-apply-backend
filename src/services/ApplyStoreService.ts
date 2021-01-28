import Apply from '../models/Apply'

interface ApplyProps{
  battleTag: String;
  charName: String;
  className: String;
  mainSpec: String;
  offSpec: String;
  about: String;
  approvalStatus: String;
}

class ApplyStoreService{
  execute = async(data: ApplyProps) => {  

    try {
      const apply = await Apply.create(data)           
      return apply

    } catch (error) {
      throw Error(error.message) 

    }    
    
  }
}

export default new ApplyStoreService