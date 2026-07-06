import { PostListingMode } from "lemmy-js-client";
import { FilterChipDropdown, FilterOption } from "./filter-chip-dropdown";
const options: FilterOption<PostListingMode>[] = [
  { value: "card", i18n: "card", icon: "card" },
  { value: "list", i18n: "list", icon: "list" },
];
type PostListingModeDropdownProps = {
  currentOption: PostListingMode;
  onSelect: (val: PostListingMode) => void;
  className?: string;
};
export function PostListingModeDropdown({
  currentOption,
  onSelect,
  className,
}: PostListingModeDropdownProps) {
  return (
    <FilterChipDropdown
      label={undefined}
      allOptions={options}
      currentOption={options.find(t => t.value === currentOption)}
      onSelect={onSelect}
      className={className}
      iconOnly
    />
  );
}
