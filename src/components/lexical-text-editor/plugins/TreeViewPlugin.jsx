import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";

import classes from "../style/index.module.css";

const TreeViewPlugin = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <TreeView
      viewClassName={classes["tree-view-output"]}
      timeTravelPanelClassName={classes["debug-timetravel-panel"]}
      timeTravelButtonClassName={classes["debug-timetravel-button"]}
      timeTravelPanelSliderClassName={classes["debug-timetravel-panel-slider"]}
      timeTravelPanelButtonClassName={classes["debug-timetravel-panel-button"]}
      editor={editor}
    />
  );
};

export default TreeViewPlugin;
