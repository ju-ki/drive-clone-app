export interface Button {
    btnClass?:string;
    title:string;
    onClick?: (event: React.FormEvent) => void;
}

export interface Progress {
    progress:number
}

export interface GithubAuth {
    clientId:string;
    clientSecret:string;
}

export interface ArrayType {
    map:Function
}

export interface FileType {
    id:string;
    parentId:string;
}
