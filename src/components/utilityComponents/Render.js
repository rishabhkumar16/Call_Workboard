import React, { Component, useState } from "react";
import "../../styles/App.css";
import withWidth from "@material-ui/core/withWidth";
import layoutConfig from "../../layout-config/layoutConfig.json";
import ComponentGetter from "../../Utils/component-getters/ComponentGetter";
import FlexGrid from "./FlexGrid";

class Render extends Component {
  getComponent = (componentID) => {
    return <ComponentGetter componentId={componentID} />;
  };

  render() {
    const { width } = this.props;
    const layoutConfigView = layoutConfig["0"][width];

    //const dispatch = useDispatch();

    return (
      <>
        <FlexGrid
          layoutConfiguration={layoutConfigView}
          getComponent={this.getComponent}
        />
      </>
    );
  }
}

export default withWidth()(Render);
