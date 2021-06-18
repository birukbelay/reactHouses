
import _issues from './issues.json'



const TIMEOUT = 100

export default {
  getIssues: (cb, timeout) => setTimeout(() => cb(_issues), timeout || TIMEOUT), 
  approve: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
  
}