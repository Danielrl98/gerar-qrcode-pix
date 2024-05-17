import controllerPix from "./pix.controller";
import { Request, Response } from "express";
import { MessageError } from "./pix.interface";

export default async function gerarPix(req: Request, res: Response) {
  const data = controllerPix(req) as MessageError;

  if (data.message) return res.status(400).json(data);

  const body = {
    key_type: data.type,
    key: data.key,
    city: data.city,
    amount: data.ammount,
    reference: "",
  };

  const resultAPI = await requisicao(body)

  return res.status(200).json(resultAPI)
}
async function requisicao(body: object){
    const result: object[] = []
    try {
        //https://www.gerarpix.com.br/emvqr-static
        await fetch("https://www.gerarpix.com.br/emvqr-static", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'X-Forwarded-For': '127.0.0.1'
        },
        method: "post",
        body: JSON.stringify(body)
      })
        .then(async (e) => {
            result.push({
                result: e.status
            }) 
        })
        .catch(( message ) => {
            console.error( message )
            result.push({
                message: message,
                code: 1
            })
        });
    } catch (error) {
        const message = error as { message: string}
        result.push({
            message: message,
            code: 2
        })
    }
    return result
}
