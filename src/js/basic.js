export default function getSpecial({ special = [] }) {
  return special.map(({ description = 'Описание недоступно', ...otherParam }) => ({ ...otherParam, description }));
}
