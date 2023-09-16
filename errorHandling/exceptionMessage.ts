import { AxiosError } from "axios";

export function basicExceptionHandling(ex: any): string {
    console.log(ex);
    let message = String(ex);
    if (ex instanceof Error) message = ex.message;

    return message;
}

export function axiosExceptionHandling(ex: any): string {
    let message: string = "";
    if (ex instanceof AxiosError) {
        if (ex.response?.status === 400)
          message = `Profile of requested Steam Id is not able to be retrieved.\nPlease ask the user to temporarily make their profile/Steam library public while importing their library.`;
        if (ex.response?.status === 429)
          message = `Too many requests, try again in a little bit`
      }
    return message;
}