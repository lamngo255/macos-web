import { FC, Fragment } from "react";
import { TopBarMenu } from "@/shared/constants";

const TopMenuLeft: FC = () => {
  return (
    <div className="left-menu flex items-center h-full">
      {TopBarMenu.map((item, i) => (
        <div className="item group relative h-full" key={i}>
          <button
            className="label px-1.5 h-full text-white text-sm hover:bg-app-transparent duration-300"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />

          <div className="dropdown duration-300 absolute -left-1 opacity-0 invisible w-max rounded py-2 px-1 bg-dropdown border border-solid border-border group-hover:opacity-100 group-hover:visible">
            {item.children.map((child, j) => (
              <Fragment key={j}>
                {child ? (
                  <div className="dropdown-child cursor-pointer px-2 w-full text-left text-sm rounded text-text hover:bg-dropdown-item-hover hover:text-white">
                    {child}
                  </div>
                ) : (
                  <div className="diviver h-px w-full bg-divider my-1" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopMenuLeft;
