// Servidor opcional para desenvolvimento. GitHub Pages serve os arquivos diretamente.
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const base=path.dirname(fileURLToPath(import.meta.url));
const args=process.argv.slice(2),at=args.indexOf('--port');
const port=Number(at>=0?args[at+1]:process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.pdf':'application/pdf','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const target=path.resolve(base,'.'+(pathname==='/'?'/index.html':pathname));
  if(!target.startsWith(base+path.sep)){res.writeHead(403);return res.end('Acesso negado');}
  const bytes=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(bytes);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Arquivo não encontrado');}
}).listen(port,'0.0.0.0',()=>console.log(`Atelier Psicotécnico: http://localhost:${port}`));
