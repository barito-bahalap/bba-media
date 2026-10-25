// Style
import "./ArticlePageSkeleton.css";

export function ArticlePageSkeleton() {
  return (
    <div
      className="article-skel"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="article-skel__sr">Memuat artikel…</span>

      <header className="article__head vt-tone vt-tone--tint">
        <div className="vt-wrap article__head-inner">
          <div className="skeleton article-skel__kicker" />
          <div className="article-skel__title">
            <div className="skeleton article-skel__line article-skel__line--lg" />
            <div className="skeleton article-skel__line article-skel__line--lg article-skel__line--80" />
            <div className="skeleton article-skel__line article-skel__line--lg article-skel__line--55" />
          </div>
          <div className="article-skel__lede">
            <div className="skeleton article-skel__line" />
            <div className="skeleton article-skel__line article-skel__line--70" />
          </div>
          <div className="skeleton article-skel__meta" />
        </div>
      </header>

      <div className="vt-wrap article__main">
        <div className="skeleton article-skel__cover" />

        <div className="article__layout">
          <div className="article__content">
            <div className="article-skel__body">
              {Array.from({ length: 3 }).map((_, block) => (
                <div key={block} className="article-skel__para">
                  <div className="skeleton article-skel__line" />
                  <div className="skeleton article-skel__line" />
                  <div className="skeleton article-skel__line" />
                  <div className="skeleton article-skel__line article-skel__line--60" />
                </div>
              ))}
            </div>
          </div>

          <div className="article__aside">
            <div className="skeleton article-skel__label" />
            <div className="article__aside-list">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="article-skel__item">
                  <div className="skeleton article-skel__thumb" />
                  <div className="article-skel__item-text">
                    <div className="skeleton article-skel__line article-skel__line--50" />
                    <div className="skeleton article-skel__line" />
                    <div className="skeleton article-skel__line article-skel__line--70" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
