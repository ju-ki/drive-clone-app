export interface Button {
    btnClass:string;
    title:string;
    onClick?: (event: React.FormEvent) => void;
}

export interface GithubAuth {
    clientId:string;
    clientSecret:string;
}