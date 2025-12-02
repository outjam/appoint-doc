---
mermaid: true
---

# Markdown Example Showcase

## Headings
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

---

## Text Formatting
**Bold text**  
*Italic text*  
***Bold and italic***  
~~Strikethrough~~  

Superscript: x^2^  
Subscript: H~2~O

---

## Blockquote
> This is a blockquote.  
> It can span multiple lines.

---

## Lists
### Unordered
- Item 1
- Item 2
  - Nested item
    - Nested deeper

### Ordered
1. Step one
2. Step two
3. Step three

### Task List
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

---

## Code
### Inline Code
Use `const x = 10` inside text.

### Code Block
```js
function greet() {
  console.log('Hello, Markdown!');
}
```

---

## Tables
| Name  | Age | City     |
|-------|-----|----------|
| Alice | 24  | Toronto  |
| Bob   | 30  | Berlin   |
| Eve   | 28  | Tokyo    |

---

## Links
[OpenAI](https://openai.com)

Bare link: https://vitepress.dev

---

## Images
![Sample Image](/assets/logo.png)

---

## Emoji
😄 🎉 🚀🔥

---

## Horizontal Rules
---
***
___

---

## Details / Spoiler
<details>
  <summary>Click to expand</summary>
  Hidden content goes here.
</details>

---

## Footnotes
Here is a statement with a footnote.[^1]

[^1]: This is the footnote.

---

## Admonitions (VitePress)
> **Note:** This is a note.

::: tip
This is a tip box.
:::

::: warning
This is a warning box.
:::

::: danger
This is a danger box.
:::

---

# Заголовок

Обычный текст

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    C --> D
\```