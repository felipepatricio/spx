export default function initMiddleware(middleware: any) {
  return (request: any, response: any) => {
    new Promise((resolve, reject) => {
      middleware(request, response, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  };
}
