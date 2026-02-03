// Gitmoji unicode emojis list
const gitmojis = [
  '🎨', '⚡️', '🔥', '🐛', '🚑️', '✨', '📝', '🚀', '💄', '🎉',
  '✅', '🔒️', '🔐', '🔖', '🚨', '🚧', '💚', '⬇️', '⬆️', '📌',
  '👷', '📈', '♻️', '➕', '➖', '🔧', '🔨', '🌐', '✏️', '💩',
  '⏪️', '🔀', '📦️', '👽️', '🚚', '📄', '💥', '🍱', '♿️', '💡',
  '🍻', '💬', '🗃️', '🔊', '🔇', '👥', '🚸', '🏗️', '📱', '🤡',
  '🥚', '🙈', '📸', '⚗️', '🔍️', '🏷️', '🌱', '🚩', '🥅', '💫',
  '🗑️', '🛂', '🩹', '🧐', '⚰️', '🧪', '👔', '🩺', '🧱', '🧑‍💻',
  '💸', '🧵', '🦺', '🔮', '🪵', '🪶', '🫥', '🩻', '🫧', '🪤',
];

// Regex to match gitmoji at start of message
const gitmojiRegex = new RegExp(`^(${gitmojis.map(e => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`);

export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F?)\s(.+)$/u,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'header-max-length': [2, 'always', 100],
    'subject-empty': [2, 'never'],
    'gitmoji-start': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'gitmoji-start': ({ raw }) => {
          const hasGitmoji = gitmojiRegex.test(raw.trim());
          return [
            hasGitmoji,
            'Commit message must start with a gitmoji (e.g., ✨ Add feature)',
          ];
        },
      },
    },
  ],
};
