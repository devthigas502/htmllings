export const exercises = [
  {
    id: "html01",
    title: "1. Títulos e Hierarquia (<h1> e <h2>)",
    category: "HTML Básico",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um título principal usando a tag <h1> com o texto 'Meu Primeiro Site' e um subtítulo com <h2> com o texto 'Sobre Mim'.",
    hint: "Sintaxe: <h1>Meu Primeiro Site</h1> e <h2>Sobre Mim</h2>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html01 -->
<!-- Crie um título <h1> e um subtítulo <h2> abaixo -->

`,
    test: (doc) => {
      const h1 = doc.querySelector('h1');
      if (!h1) return { pass: false, error: "Nenhuma tag <h1> encontrada." };
      if (h1.textContent.trim() !== 'Meu Primeiro Site') {
        return { pass: false, error: `O <h1> deve ter o texto 'Meu Primeiro Site', mas encontrou '${h1.textContent.trim()}'.` };
      }
      const h2 = doc.querySelector('h2');
      if (!h2) return { pass: false, error: "Nenhuma tag <h2> encontrada." };
      if (h2.textContent.trim() !== 'Sobre Mim') {
        return { pass: false, error: `O <h2> deve ter o texto 'Sobre Mim', mas encontrou '${h2.textContent.trim()}'.` };
      }
      return { pass: true, message: "Sucesso! Tags <h1> e <h2> criadas corretamente." };
    }
  },
  {
    id: "html02",
    title: "2. Parágrafos de Texto (<p>)",
    category: "HTML Textos",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um parágrafo usando a tag <p> contendo a frase exatamente: 'Estou aprendendo HTML no HTMLlings!'.",
    hint: "Exemplo: <p>Estou aprendendo HTML no HTMLlings!</p>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html02 -->
<!-- Crie um parágrafo <p> com a frase solicitada -->

`,
    test: (doc) => {
      const p = doc.querySelector('p');
      if (!p) return { pass: false, error: "Nenhuma tag <p> encontrada." };
      if (p.textContent.trim() !== 'Estou aprendendo HTML no HTMLlings!') {
        return { pass: false, error: `O texto do parágrafo deve ser 'Estou aprendendo HTML no HTMLlings!', mas obteve '${p.textContent.trim()}'.` };
      }
      return { pass: true, message: "Excelente! Parágrafo criado com sucesso." };
    }
  },
  {
    id: "html03",
    title: "3. Negrito e Itálico (<strong> e <em>)",
    category: "HTML Textos",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um parágrafo <p> com a mensagem: 'O HTML é incrível e fácil!'. Destaque a palavra 'incrível' com a tag <strong> e a palavra 'fácil' com a tag <em>.",
    hint: "<p>O HTML é <strong>incrível</strong> e <em>fácil</em>!</p>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html03 -->
<!-- Crie o parágrafo <p> aplicando <strong> para 'incrível' e <em> para 'fácil' -->

`,
    test: (doc) => {
      const p = doc.querySelector('p');
      if (!p) return { pass: false, error: "Nenhuma tag <p> encontrada." };
      const strong = p.querySelector('strong');
      if (!strong || strong.textContent.trim() !== 'incrível') {
        return { pass: false, error: "A palavra 'incrível' deve estar dentro de uma tag <strong>." };
      }
      const em = p.querySelector('em');
      if (!em || em.textContent.trim() !== 'fácil') {
        return { pass: false, error: "A palavra 'fácil' deve estar dentro de uma tag <em>." };
      }
      return { pass: true, message: "Parabéns! Tags de formatação <strong> e <em> aplicadas corretamente." };
    }
  },
  {
    id: "html04",
    title: "4. Links de Navegação (<a>)",
    category: "HTML Links",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um link usando a tag <a> apontando para 'https://developer.mozilla.org', com o atributo target='_blank' e o texto visível 'MDN Web Docs'.",
    hint: "<a href='https://developer.mozilla.org' target='_blank'>MDN Web Docs</a>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html04 -->
<!-- Crie o link <a> com atributos href, target e texto -->

`,
    test: (doc) => {
      const a = doc.querySelector('a');
      if (!a) return { pass: false, error: "Nenhuma tag <a> encontrada." };
      const href = a.getAttribute('href');
      if (!href || !href.includes('developer.mozilla.org')) {
        return { pass: false, error: "O atributo href deve ser 'https://developer.mozilla.org'." };
      }
      if (a.getAttribute('target') !== '_blank') {
        return { pass: false, error: "O atributo target deve ser '_blank'." };
      }
      if (a.textContent.trim() !== 'MDN Web Docs') {
        return { pass: false, error: `O texto do link deve ser 'MDN Web Docs', mas foi '${a.textContent.trim()}'.` };
      }
      return { pass: true, message: "Ótimo! Link configurado com href e target='_blank'." };
    }
  },
  {
    id: "html05",
    title: "5. Inserindo Imagens (<img>)",
    category: "HTML Mídia",
    difficulty: "Fácil",
    language: "html",
    description: "Insira uma imagem usando a tag <img>. Defina o atributo src para 'https://picsum.photos/150' e o atributo alt para 'Foto de Exemplo'.",
    hint: "<img src='https://picsum.photos/150' alt='Foto de Exemplo' />",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html05 -->
<!-- Crie a tag <img> com os atributos src e alt -->

`,
    test: (doc) => {
      const img = doc.querySelector('img');
      if (!img) return { pass: false, error: "Nenhuma tag <img> encontrada." };
      const src = img.getAttribute('src');
      if (!src || !src.includes('picsum.photos/150')) {
        return { pass: false, error: "O atributo src deve conter 'https://picsum.photos/150'." };
      }
      if (img.getAttribute('alt') !== 'Foto de Exemplo') {
        return { pass: false, error: "O atributo alt deve ser exatamente 'Foto de Exemplo'." };
      }
      return { pass: true, message: "Perfeito! Imagem inserida com src e alt acessível." };
    }
  },
  {
    id: "html06",
    title: "6. Lista Não Ordenada (<ul> e <li>)",
    category: "HTML Listas",
    difficulty: "Fácil",
    language: "html",
    description: "Crie uma lista com marcadores (<ul>) contendo 3 itens (<li>): 'HTML', 'CSS' e 'JavaScript'.",
    hint: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html06 -->
<!-- Crie a lista <ul> com 3 <li> -->

`,
    test: (doc) => {
      const ul = doc.querySelector('ul');
      if (!ul) return { pass: false, error: "Nenhuma tag <ul> encontrada." };
      const lis = ul.querySelectorAll('li');
      if (lis.length !== 3) {
        return { pass: false, error: `A <ul> deve conter exatamente 3 itens <li>, mas possui ${lis.length}.` };
      }
      const texts = Array.from(lis).map(l => l.textContent.trim());
      if (texts[0] !== 'HTML' || texts[1] !== 'CSS' || texts[2] !== 'JavaScript') {
        return { pass: false, error: `Os itens esperados são HTML, CSS, JavaScript. Encontrados: ${texts.join(', ')}.` };
      }
      return { pass: true, message: "Sucesso! Lista não ordenada criada perfeitamente." };
    }
  },
  {
    id: "html07",
    title: "7. Lista Ordenada (<ol> e <li>)",
    category: "HTML Listas",
    difficulty: "Fácil",
    language: "html",
    description: "Crie uma lista numerada (<ol>) com 3 etapas do dia (<li>): 'Acordar', 'Estudar' e 'Dormir'.",
    hint: "<ol>\n  <li>Acordar</li>\n  <li>Estudar</li>\n  <li>Dormir</li>\n</ol>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html07 -->
<!-- Crie a lista numerada <ol> com os 3 passos -->

`,
    test: (doc) => {
      const ol = doc.querySelector('ol');
      if (!ol) return { pass: false, error: "Nenhuma tag <ol> encontrada." };
      const lis = ol.querySelectorAll('li');
      if (lis.length !== 3) {
        return { pass: false, error: `A <ol> deve conter exatamente 3 itens <li>, mas possui ${lis.length}.` };
      }
      const texts = Array.from(lis).map(l => l.textContent.trim());
      if (texts[0] !== 'Acordar' || texts[1] !== 'Estudar' || texts[2] !== 'Dormir') {
        return { pass: false, error: `Os itens esperados são 'Acordar', 'Estudar', 'Dormir'. Obtidos: ${texts.join(', ')}.` };
      }
      return { pass: true, message: "Excelente! Lista numerada ordenada criada." };
    }
  },
  {
    id: "html08",
    title: "8. Criando Botões (<button>)",
    category: "HTML Formulários",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um botão interativo usando a tag <button> com o atributo type='button' e o texto 'Clique Aqui!'.",
    hint: "<button type='button'>Clique Aqui!</button>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html08 -->
<!-- Crie o botão <button> com atributo type e texto -->

`,
    test: (doc) => {
      const btn = doc.querySelector('button');
      if (!btn) return { pass: false, error: "Nenhuma tag <button> encontrada." };
      if (btn.getAttribute('type') !== 'button') {
        return { pass: false, error: "O atributo type do botão deve ser 'button'." };
      }
      if (btn.textContent.trim() !== 'Clique Aqui!') {
        return { pass: false, error: `Texto do botão esperado 'Clique Aqui!', obtido '${btn.textContent.trim()}'.` };
      }
      return { pass: true, message: "Parabéns! Tag <button> criada com sucesso." };
    }
  },
  {
    id: "html09",
    title: "9. Campos de Entrada (<input>)",
    category: "HTML Formulários",
    difficulty: "Fácil",
    language: "html",
    description: "Crie um campo de texto usando <input> com type='text' e o placeholder='Digite seu nome'.",
    hint: "<input type='text' placeholder='Digite seu nome' />",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html09 -->
<!-- Crie o <input> de texto com placeholder -->

`,
    test: (doc) => {
      const input = doc.querySelector('input');
      if (!input) return { pass: false, error: "Nenhuma tag <input> encontrada." };
      if (input.getAttribute('type') !== 'text') {
        return { pass: false, error: "O atributo type deve ser 'text'." };
      }
      if (input.getAttribute('placeholder') !== 'Digite seu nome') {
        return { pass: false, error: "O placeholder deve ser 'Digite seu nome'." };
      }
      return { pass: true, message: "Sucesso! Input de texto configurado." };
    }
  },
  {
    id: "html10",
    title: "10. Rótulos de Formulário (<label> e id)",
    category: "HTML Formulários",
    difficulty: "Médio",
    language: "html",
    description: "Crie um rótulo <label> com o texto 'E-mail:' associado ao atributo for='email'. Em seguida, crie um <input> com type='email' e id='email'.",
    hint: "<label for='email'>E-mail:</label>\n<input type='email' id='email' />",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html10 -->
<!-- Crie o <label> e o <input> conectados via for e id -->

`,
    test: (doc) => {
      const label = doc.querySelector('label');
      if (!label) return { pass: false, error: "Nenhuma tag <label> encontrada." };
      if (label.getAttribute('for') !== 'email') {
        return { pass: false, error: "O atributo for do <label> deve ser 'email'." };
      }
      if (!label.textContent.includes('E-mail:')) {
        return { pass: false, error: "O texto do <label> deve conter 'E-mail:'." };
      }
      const input = doc.querySelector('input#email');
      if (!input) return { pass: false, error: "Nenhum <input> com id='email' foi encontrado." };
      if (input.getAttribute('type') !== 'email') {
        return { pass: false, error: "O atributo type do input deve ser 'email'." };
      }
      return { pass: true, message: "Ótimo! Label associado ao Input via atributo for/id." };
    }
  },
  {
    id: "html11",
    title: "11. Formulários de Envio (<form>)",
    category: "HTML Formulários",
    difficulty: "Médio",
    language: "html",
    description: "Crie um formulário (<form>) contendo um campo de senha (<input type='password' placeholder='Sua Senha' />) e um botão de envio (<button type='submit'>Entrar</button>).",
    hint: "<form>\n  <input type='password' placeholder='Sua Senha' />\n  <button type='submit'>Entrar</button>\n</form>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html11 -->
<!-- Encapsule o input de senha e o botão dentro da tag <form> -->

`,
    test: (doc) => {
      const form = doc.querySelector('form');
      if (!form) return { pass: false, error: "Nenhuma tag <form> encontrada." };
      const input = form.querySelector('input[type="password"]');
      if (!input) return { pass: false, error: "Input com type='password' não encontrado dentro do <form>." };
      if (input.getAttribute('placeholder') !== 'Sua Senha') {
        return { pass: false, error: "Input de senha deve ter placeholder='Sua Senha'." };
      }
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return { pass: false, error: "Botão com type='submit' não encontrado dentro do <form>." };
      if (btn.textContent.trim() !== 'Entrar') {
        return { pass: false, error: "Texto do botão submit deve ser 'Entrar'." };
      }
      return { pass: true, message: "Excelente! Estrutura de formulário completa." };
    }
  },
  {
    id: "html12",
    title: "12. Caixa de Texto e Seleções (<textarea> e <select>)",
    category: "HTML Formulários",
    difficulty: "Médio",
    language: "html",
    description: "Crie uma área de texto (<textarea placeholder='Deixe uma mensagem'></textarea>) e um menu de seleção (<select>) contendo duas opções (<option>): 'Brasil' e 'Portugal'.",
    hint: "<textarea placeholder='Deixe uma mensagem'></textarea>\n<select>\n  <option>Brasil</option>\n  <option>Portugal</option>\n</select>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html12 -->
<!-- Crie a <textarea> e o menu <select> com as opções -->

`,
    test: (doc) => {
      const txt = doc.querySelector('textarea');
      if (!txt) return { pass: false, error: "Nenhuma tag <textarea> encontrada." };
      if (txt.getAttribute('placeholder') !== 'Deixe uma mensagem') {
        return { pass: false, error: "<textarea> deve ter placeholder='Deixe uma mensagem'." };
      }
      const select = doc.querySelector('select');
      if (!select) return { pass: false, error: "Nenhuma tag <select> encontrada." };
      const options = select.querySelectorAll('option');
      if (options.length < 2) {
        return { pass: false, error: "O <select> deve conter pelo menos 2 tags <option>." };
      }
      const optTexts = Array.from(options).map(o => o.textContent.trim());
      if (!optTexts.includes('Brasil') || !optTexts.includes('Portugal')) {
        return { pass: false, error: "As opções do <select> devem ser 'Brasil' e 'Portugal'." };
      }
      return { pass: true, message: "Muito bem! Textarea e Select configurados." };
    }
  },
  {
    id: "html13",
    title: "13. Tabelas de Dados (<table>, <tr>, <th>, <td>)",
    category: "HTML Tabelas",
    difficulty: "Médio",
    language: "html",
    description: "Crie uma tabela (<table>). Na primeira linha (<tr>), defina dois cabeçalhos (<th>): 'Produto' e 'Preço'. Na segunda linha (<tr>), defina as células (<td>): 'Café' e 'R$ 5,00'.",
    hint: "<table>\n  <tr>\n    <th>Produto</th>\n    <th>Preço</th>\n  </tr>\n  <tr>\n    <td>Café</td>\n    <td>R$ 5,00</td>\n  </tr>\n</table>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html13 -->
<!-- Monte a tabela <table> com cabeçalho <th> e dados <td> -->

`,
    test: (doc) => {
      const table = doc.querySelector('table');
      if (!table) return { pass: false, error: "Nenhuma tag <table> encontrada." };
      const trs = table.querySelectorAll('tr');
      if (trs.length < 2) {
        return { pass: false, error: "A tabela precisa de pelo menos 2 linhas (<tr>)." };
      }
      const ths = trs[0].querySelectorAll('th');
      if (ths.length < 2 || ths[0].textContent.trim() !== 'Produto' || ths[1].textContent.trim() !== 'Preço') {
        return { pass: false, error: "A primeira linha deve conter <th> com 'Produto' e 'Preço'." };
      }
      const tds = trs[1].querySelectorAll('td');
      if (tds.length < 2 || tds[0].textContent.trim() !== 'Café' || tds[1].textContent.trim() !== 'R$ 5,00') {
        return { pass: false, error: "A segunda linha deve conter <td> com 'Café' e 'R$ 5,00'." };
      }
      return { pass: true, message: "Parabéns! Tabela HTML construída com sucesso." };
    }
  },
  {
    id: "html14",
    title: "14. Cabeçalho e Rodapé (<header> e <footer>)",
    category: "HTML Semântico",
    difficulty: "Médio",
    language: "html",
    description: "Crie um cabeçalho semântico (<header>) contendo um <h1> com 'Portal de Notícias', e um rodapé (<footer>) contendo um <p> com '© 2026 Todos os direitos reservados'.",
    hint: "<header>\n  <h1>Portal de Notícias</h1>\n</header>\n<footer>\n  <p>© 2026 Todos os direitos reservados</p>\n</footer>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html14 -->
<!-- Crie as tags semânticas <header> e <footer> -->

`,
    test: (doc) => {
      const header = doc.querySelector('header');
      if (!header) return { pass: false, error: "Nenhuma tag <header> encontrada." };
      const h1 = header.querySelector('h1');
      if (!h1 || h1.textContent.trim() !== 'Portal de Notícias') {
        return { pass: false, error: "O <header> deve conter um <h1> com 'Portal de Notícias'." };
      }
      const footer = doc.querySelector('footer');
      if (!footer) return { pass: false, error: "Nenhuma tag <footer> encontrada." };
      const p = footer.querySelector('p');
      if (!p || !p.textContent.includes('© 2026 Todos os direitos reservados')) {
        return { pass: false, error: "O <footer> deve conter um <p> com '© 2026 Todos os direitos reservados'." };
      }
      return { pass: true, message: "Ótimo! Estruturas semânticas <header> e <footer> criadas." };
    }
  },
  {
    id: "html15",
    title: "15. Navegação e Conteúdo Principal (<nav> e <main>)",
    category: "HTML Semântico",
    difficulty: "Médio",
    language: "html",
    description: "Crie uma tag de navegação (<nav>) contendo dois links (<a>): 'Início' e 'Contato'. Abaixo dela, crie a tag principal (<main>) com um parágrafo (<p>) 'Bem-vindo ao site!'.",
    hint: "<nav>\n  <a href='#'>Início</a>\n  <a href='#'>Contato</a>\n</nav>\n<main>\n  <p>Bem-vindo ao site!</p>\n</main>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html15 -->
<!-- Crie <nav> com os links e <main> com o parágrafo -->

`,
    test: (doc) => {
      const nav = doc.querySelector('nav');
      if (!nav) return { pass: false, error: "Nenhuma tag <nav> encontrada." };
      const links = nav.querySelectorAll('a');
      if (links.length < 2) return { pass: false, error: "O <nav> deve conter pelo menos 2 links (<a>)." };
      const linkTexts = Array.from(links).map(l => l.textContent.trim());
      if (!linkTexts.includes('Início') || !linkTexts.includes('Contato')) {
        return { pass: false, error: "Os links do <nav> devem ser 'Início' e 'Contato'." };
      }
      const main = doc.querySelector('main');
      if (!main) return { pass: false, error: "Nenhuma tag <main> encontrada." };
      const p = main.querySelector('p');
      if (!p || p.textContent.trim() !== 'Bem-vindo ao site!') {
        return { pass: false, error: "O <main> deve conter um <p> com 'Bem-vindo ao site!'." };
      }
      return { pass: true, message: "Perfeito! Tags semânticas <nav> e <main> implementadas." };
    }
  },
  {
    id: "html16",
    title: "16. Seções e Artigos (<section> e <article>)",
    category: "HTML Semântico",
    difficulty: "Médio",
    language: "html",
    description: "Crie uma seção (<section>) e, dentro dela, um artigo (<article>). O artigo deve conter um título <h3> com 'Título do Artigo' e um parágrafo <p> com 'Texto do artigo.'.",
    hint: "<section>\n  <article>\n    <h3>Título do Artigo</h3>\n    <p>Texto do artigo.</p>\n  </article>\n</section>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html16 -->
<!-- Crie <section> contendo um <article> com <h3> e <p> -->

`,
    test: (doc) => {
      const sec = doc.querySelector('section');
      if (!sec) return { pass: false, error: "Nenhuma tag <section> encontrada." };
      const art = sec.querySelector('article');
      if (!art) return { pass: false, error: "Tag <article> deve estar dentro da <section>." };
      const h3 = art.querySelector('h3');
      if (!h3 || h3.textContent.trim() !== 'Título do Artigo') {
        return { pass: false, error: "O <article> deve conter um <h3> com 'Título do Artigo'." };
      }
      const p = art.querySelector('p');
      if (!p || p.textContent.trim() !== 'Texto do artigo.') {
        return { pass: false, error: "O <article> deve conter um <p> com 'Texto do artigo.'." };
      }
      return { pass: true, message: "Excelente aninhamento de <section> e <article>!" };
    }
  },
  {
    id: "html17",
    title: "17. Imagem com Legenda (<figure> e <figcaption>)",
    category: "HTML Semântico",
    difficulty: "Médio",
    language: "html",
    description: "Crie uma estrutura <figure> contendo uma <img> (src='https://picsum.photos/100', alt='Paisagem') e uma legenda <figcaption> com o texto 'Uma bela paisagem'.",
    hint: "<figure>\n  <img src='https://picsum.photos/100' alt='Paisagem' />\n  <figcaption>Uma bela paisagem</figcaption>\n</figure>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html17 -->
<!-- Encapsule a imagem e legenda na tag <figure> -->

`,
    test: (doc) => {
      const fig = doc.querySelector('figure');
      if (!fig) return { pass: false, error: "Nenhuma tag <figure> encontrada." };
      const img = fig.querySelector('img');
      if (!img) return { pass: false, error: "Tag <img> deve estar dentro de <figure>." };
      if (!img.getAttribute('src')?.includes('picsum.photos/100') || img.getAttribute('alt') !== 'Paisagem') {
        return { pass: false, error: "A <img> deve ter src='https://picsum.photos/100' e alt='Paisagem'." };
      }
      const cap = fig.querySelector('figcaption');
      if (!cap || cap.textContent.trim() !== 'Uma bela paisagem') {
        return { pass: false, error: "<figcaption> com texto 'Uma bela paisagem' é obrigatório dentro de <figure>." };
      }
      return { pass: true, message: "Muito bom! Uso correto de <figure> e <figcaption>." };
    }
  },
  {
    id: "html18",
    title: "18. Elemento Retrátil Nativo (<details> e <summary>)",
    category: "HTML Interativo",
    difficulty: "Avançado",
    language: "html",
    description: "Crie um componente sanfona usando <details>. Dentro dele, coloque um <summary> com 'Clique para ver a resposta' e um <p> com 'O HTML5 é a versão atual do HTML!'.",
    hint: "<details>\n  <summary>Clique para ver a resposta</summary>\n  <p>O HTML5 é a versão atual do HTML!</p>\n</details>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html18 -->
<!-- Crie a sanfona nativa com <details> e <summary> -->

`,
    test: (doc) => {
      const det = doc.querySelector('details');
      if (!det) return { pass: false, error: "Nenhuma tag <details> encontrada." };
      const sum = det.querySelector('summary');
      if (!sum || sum.textContent.trim() !== 'Clique para ver a resposta') {
        return { pass: false, error: "O <details> deve conter um <summary> com 'Clique para ver a resposta'." };
      }
      const p = det.querySelector('p');
      if (!p || p.textContent.trim() !== 'O HTML5 é a versão atual do HTML!') {
        return { pass: false, error: "O <details> deve conter um <p> com 'O HTML5 é a versão atual do HTML!'." };
      }
      return { pass: true, message: "Incrível! <details> e <summary> criam sanfonas interativas puramente com HTML." };
    }
  },
  {
    id: "html19",
    title: "19. Destacando Código e Textos (<mark> e <code>)",
    category: "HTML Textos",
    difficulty: "Avançado",
    language: "html",
    description: "Crie um parágrafo <p> que inclua um texto destacado com a tag <mark> 'IMPORTANTE' e um trecho de código formatado com a tag <code> 'console.log()'.",
    hint: "<p>Aviso <mark>IMPORTANTE</mark>: use o comando <code>console.log()</code>.</p>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO: html19 -->
<!-- Crie um <p> contendo as tags <mark> e <code> -->

`,
    test: (doc) => {
      const p = doc.querySelector('p');
      if (!p) return { pass: false, error: "Nenhuma tag <p> encontrada." };
      const mark = p.querySelector('mark');
      if (!mark || mark.textContent.trim() !== 'IMPORTANTE') {
        return { pass: false, error: "A tag <mark> com o texto 'IMPORTANTE' deve estar dentro do parágrafo." };
      }
      const code = p.querySelector('code');
      if (!code || code.textContent.trim() !== 'console.log()') {
        return { pass: false, error: "A tag <code> com o texto 'console.log()' deve estar dentro do parágrafo." };
      }
      return { pass: true, message: "Show de bola! Tags <mark> e <code> usadas corretamente." };
    }
  },
  {
    id: "html20",
    title: "20. Desafio Final: Página Semântica Completa",
    category: "Desafio Final",
    difficulty: "Avançado",
    language: "html",
    description: "Monte uma página completa com as três regiões principais: um <header> com <h1> 'Meu Perfil', um <main> contendo um <article> com um <p> 'Desenvolvedor em formação', e um <footer> com um <p> 'Contato: aluno@email.com'.",
    hint: "<header>\n  <h1>Meu Perfil</h1>\n</header>\n<main>\n  <article>\n    <p>Desenvolvedor em formação</p>\n  </article>\n</main>\n<footer>\n  <p>Contato: aluno@email.com</p>\n</footer>",
    initialHtml: "",
    initialCode: `<!-- EXERCÍCIO FINAL: html20 -->
<!-- Monte a página semântica completa contendo <header>, <main> (com <article>) e <footer> -->

`,
    test: (doc) => {
      const header = doc.querySelector('header');
      if (!header) return { pass: false, error: "Faltando a tag <header>." };
      if (header.querySelector('h1')?.textContent.trim() !== 'Meu Perfil') {
        return { pass: false, error: "<header> deve conter <h1> com 'Meu Perfil'." };
      }

      const main = doc.querySelector('main');
      if (!main) return { pass: false, error: "Faltando a tag <main>." };
      const article = main.querySelector('article');
      if (!article) return { pass: false, error: "<main> deve conter um <article>." };
      if (article.querySelector('p')?.textContent.trim() !== 'Desenvolvedor em formação') {
        return { pass: false, error: "<article> deve conter <p> com 'Desenvolvedor em formação'." };
      }

      const footer = doc.querySelector('footer');
      if (!footer) return { pass: false, error: "Faltando a tag <footer>." };
      if (footer.querySelector('p')?.textContent.trim() !== 'Contato: aluno@email.com') {
        return { pass: false, error: "<footer> deve conter <p> com 'Contato: aluno@email.com'." };
      }

      return { pass: true, message: "🏆 PARABÉNS! Você dominou a estrutura de tags HTML5!" };
    }
  }
];
