// worker.js
// Este é o backend do projeto Olá, Nuvem.
// Ele roda na Cloudflare, sem servidor para você administrar.
// Quando alguém acessa a URL do Worker, esta função responde com um JSON.

export default {
  async fetch(request) {
    // Pega a hora atual no servidor, no fuso de São Paulo.
    const horaDoServidor = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    // Monta a resposta.
    const corpo = {
      mensagem: "Olá da nuvem!",
      horaDoServidor: horaDoServidor,
    };

    // Devolve o JSON.
    // O cabeçalho Access-Control-Allow-Origin libera a página do Pages
    // a chamar este Worker. Sem ele, o navegador bloqueia por CORS.
    return new Response(JSON.stringify(corpo), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
