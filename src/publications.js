import membersData from './membersData.js?v=members-network-20260605';

function cleanMemberName(name) {
  return name.replace(/\s*\([^)]*\)\s*/g, '').trim();
}

function normalizeName(name) {
  return cleanMemberName(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\*/g, '')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase();
}

function getAllMemberNames() {
  const current = [
    ...membersData.currentMembers.faculty,
    ...membersData.currentMembers.students
  ];
  const alumni = Object.values(membersData.alumni)
    .flat()
    .map(cleanMemberName);

  return [...new Set([...current, ...alumni])];
}

function buildAuthorIndex() {
  const authorIndex = new Set();

  getAllMemberNames().forEach((memberName) => {
    [
      memberName,
      ...(membersData.memberAliases[memberName] || [])
    ].forEach((alias) => {
      authorIndex.add(normalizeName(alias));
    });
  });

  return authorIndex;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function highlightAuthors(authorElement, authorIndex) {
  const authorText = authorElement.textContent;
  const parts = authorText.split(/(,\s+and\s+|\s*,\s*|\s+and\s+)/i);

  authorElement.innerHTML = parts
    .map((part) => {
      if (!part.trim()) return escapeHtml(part);
      if (/^,\s+and\s+$/i.test(part) || /^\s*,\s*$/.test(part) || /^\s+and\s+$/i.test(part)) {
        return escapeHtml(part);
      }

      const authorName = part.trim();
      const highlighted = authorIndex.has(normalizeName(authorName));

      return highlighted
        ? `<strong class="alpha-author">${escapeHtml(part)}</strong>`
        : escapeHtml(part);
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const authorIndex = buildAuthorIndex();
  document.querySelectorAll('.authors').forEach((authorElement) => {
    highlightAuthors(authorElement, authorIndex);
  });
});
