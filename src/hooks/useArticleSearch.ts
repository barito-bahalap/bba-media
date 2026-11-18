import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  searchArticles,
  type SearchableArticle,
} from "@/domain/searchArticles";

export function useArticleSearch<T extends SearchableArticle>(
  articles: readonly T[],
) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const [typed, setTyped] = useState({ from: query, text: query });

  const draft = typed.from === query ? typed.text : query;

  const setDraft = useCallback(
    (text: string) => setTyped({ from: query, text }),
    [query],
  );

  const results = useMemo(
    () => (query ? searchArticles(articles, query) : []),
    [articles, query],
  );

  const suggestions = useMemo(
    () => (draft.trim().length >= 2 ? searchArticles(articles, draft, 6) : []),
    [articles, draft],
  );

  const submit = useCallback(
    (next: string) => {
      const value = next.trim();
      setParams((prev) => {
        const nextParams = new URLSearchParams(prev);
        if (value) nextParams.set("q", value);
        else nextParams.delete("q");
        return nextParams;
      });
    },
    [setParams],
  );

  return { query, draft, setDraft, submit, results, suggestions };
}
