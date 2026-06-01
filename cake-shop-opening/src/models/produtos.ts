export interface Produto {
  titulo: string;
  descricao: string;
  imagem: string;
}

export const produtos: Produto[] = [
  {
    titulo: "Bolos Artesanais",
    descricao: "Receitas caseiras, ingredientes premium e muito carinho.",
    imagem: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop"
  },
  {
    titulo: "Confeitaria Fina",
    descricao: "Sobremesas sofisticadas e sabores refinados.",
    imagem: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop"
  },
  {
    titulo: "Doces de Autor",
    descricao: "Criações únicas para momentos especiais.",
    imagem: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&auto=format&fit=crop"
  }
];