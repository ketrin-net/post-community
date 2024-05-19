export interface postResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface changeTitlePostRequest {
  postId: number;
  title: string;
}
