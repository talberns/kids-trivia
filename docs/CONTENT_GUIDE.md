# Content guide

Players include Jews, Christians, atheists and academic scholars checking our facts. Every question has to hold up for all of them.

## Editorial stance

- Use a neutral, academic voice that respects faith. The game teaches what the text says and the world it came from. It never tells players what to believe.
- Faith claims (miracles, the Resurrection) are presented as *what the text says* and *what each tradition believes*. They are neither affirmed nor denied as historical fact.
- Where Jewish and Christian readings differ, give **both**, labelled, without ranking them. The Jewish reading is the one from Jesus' own time (see `tradition.jewish` below).
- Use BCE / CE. Write "Hebrew Bible / Old Testament" where the distinction matters.
- Content must suit ages 13+. Handle violence factually and briefly.

## The four kinds of statement (keep them apart)

| Field | Meaning |
|---|---|
| `textSays` | What the biblical text states, with the reference. Quotes must match the **World English Bible** word for word. |
| `world` | External history, archaeology and ancient sources. |
| `tradition.jewish` | **Jewish tradition in Jesus' day**: how Jews of the late Second Temple period (about 200 BCE – 70 CE), the world of Jesus and the apostles, understood the passage. Use sources from that period: Josephus, Philo, the Dead Sea Scrolls, Jubilees, the Apocrypha and Pseudepigrapha, the Septuagint, inscriptions, and the New Testament's descriptions of Jewish practice. Do **not** use later rabbinic or modern material here (Talmud, midrash, Rashi, today's customs). The Mishnah may be cited only for Temple-era practice, and must be labelled as a later record. |
| `tradition.christian` / `.shared` | Christian interpretation, or notes shared across traditions, attributed to their source. |
| `debate` | Where scholars disagree. **Required** when `confidence` is `"debated"`. |

`theirEyes` is required. It's one or two vivid sentences from the viewpoint of someone living at the time.

## Confidence

- `settled`: stated in the text, or firmly established by evidence.
- `mainstream`: the majority scholarly view; mention notable minority views in `debate`.
- `debated`: no consensus.

Label the **answer** itself. Use `debate` to add context even when the answer is settled.

## Accuracy rules

1. Write from sources, not memory. Every claim needs a citation in `sources`.
2. Wrong choices must be clearly wrong under every tradition's reading.
3. Watch verse numbering: Hebrew and English numbering differ in places (e.g., Genesis 32, Numbers 17, Psalms). Note the difference where it matters.
4. Prefer "earliest undisputed" over "first" when describing finds.
5. Don't repeat popular claims without a primary source. For example, "Jews avoided Samaria" is contradicted by Josephus.

## Review workflow

1. Add the question with `review: { status: "draft" }`.
2. An **independent** reviewer, who did not write it, checks every verse, quote, date, name and citation against primary sources. The reviewer also looks for distractors that could be argued as correct, overstated certainty and bias.
3. Fix every problem, or cut the question. Never soften an unverifiable claim and keep it.
4. Set `review: { status: "published", reviewedOn: "YYYY-MM-DD", notes: "…" }`.
5. `npm test` must pass. Each playable level needs exactly five published questions.

Players report errors through the "Report it" link, which opens a pre-filled GitHub issue. Fix them the same way.
