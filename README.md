## Fluxo de desenvolvimento

### Adicionando uma mudança

Toda feature branch que será mergeada para `development` deve incluir um changeset descrevendo a alteração:

```bash
pnpm changeset
```

O prompt vai pedir:
1. **Tipo de mudança** — escolha um dos três:
   - `patch` — correção de bug, ajuste visual, melhoria interna (ex: `0.0.1` → `0.0.2`)
   - `minor` — nova funcionalidade sem quebrar nada existente (ex: `0.1.0` → `0.2.0`)
   - `major` — mudança que quebra compatibilidade (ex: `1.0.0` → `2.0.0`)
2. **Descrição** — um resumo curto da mudança em inglês (será usado no CHANGELOG)

Um arquivo será gerado em `.changeset/`. Commite esse arquivo junto com sua feature:

```bash
git add .changeset/
git commit -m "feat: minha feature"
```

### Escrevendo uma boa descrição de changeset

- Use o **tempo presente**: `Add user authentication` e não `Added user authentication`
- Seja **objetivo**: descreva o que muda para quem usa, não como foi implementado
- Evite jargões internos: o CHANGELOG é lido pelo time e às vezes por usuários externos

```
# Bom
Add dark mode support to the dashboard

# Ruim
Refactor ThemeProvider to support multiple color schemes via CSS variables
```

### Gerando uma nova versão

Quando as features estiverem prontas para release, acesse o repositório no GitHub:

```
Actions → Version Bump → Run workflow → selecione a branch development → Run workflow
```

A Action irá automaticamente:
- Consolidar todos os changesets pendentes
- Atualizar a versão em `package.json` conforme o tipo mais alto entre os changesets (ex: se houver um `minor` e dois `patch`, a versão sobe `minor`)
- Gerar/atualizar o `CHANGELOG.md`
- Fazer commit direto na `development`
