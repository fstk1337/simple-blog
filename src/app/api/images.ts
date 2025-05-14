import React, { ReactNode } from "react";

const API_URL = 'http://localhost:3000';


export const imagesApi = {
  getImage: async(path: string, alt: string) => {
    return React.createElement("img", {
      src: `${API_URL}/${path}`,
      alt
    }) as ReactNode;
  }
}
