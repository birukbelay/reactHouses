// Category Types
export const LOADING_ERROR = 'LOADING_ERROR';
// export const NETWORK_ERROR = 'NETWORK_ERROR';

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVED_ISSUES = 'RECEIVED_ISSUES';

export const POSTING_APPROVAL = 'POSTING_APPROVAL';
export const APPROVAL_POSTED = 'APPROVAL_POSTED';

//Dont touch this this is important for the api end Point
export const IssueTypes = {
    APPROVED: 'getApproved',
    DECLINED: 'getDeclined',
    PENDING: 'pending',
}

//Dont touch this this is important for the api end Point
export const setIssue = {
    APPROVE: 'approve',
    DECLINE: 'decline',
}