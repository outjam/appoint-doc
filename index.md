---
layout: home

hero:
  name: appoint
  text: бизнес логика
  image:
    src: /assets/logo-home.png
    alt: appoint
  actions:
    - theme: brand
      text: Перейти
      link: /docs/main/Update

---

<div class="features-custom">
  <div class="feature-card">
    <h3>🚀 Быстрый старт</h3>
    <p>Начните работу за несколько минут с нашей документацией</p>
  </div>
  
  <div class="feature-card">
    <h3>📚 Полная документация</h3>
    <p>Исчерпывающие руководства и примеры использования</p>
  </div>
  
  <div class="feature-card">
    <h3>🔧 Простота использования</h3>
    <p>Интуитивно понятный интерфейс и API</p>
  </div>
</div>

<style>
.features-custom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 48px 0;
  max-width: 1152px;
  margin: 0 auto;
}

.feature-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.feature-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>