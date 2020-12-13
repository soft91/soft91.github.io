interface ProjectInterface {
    imgPath: Function,
    title  : string,
    comment: string,
    content: string,
    gitURL : string,
    isShowing: boolean
}

export interface ProjectInterfaces extends Array<ProjectInterface>{};