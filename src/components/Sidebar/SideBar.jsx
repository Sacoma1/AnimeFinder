import "./SideBar.css";
import { CategoryOption } from "./../InputRadio/InputRadio";
import { animeCategories } from "../../../category";

export const SideBar = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <h3>Categories</h3>
        {animeCategories.map((c) => (
          <CategoryOption
            key={c}
            name="category"
            label={c}
            value={c.toLowerCase}
          />
        ))}
      </aside>
    </div>
  );
};
