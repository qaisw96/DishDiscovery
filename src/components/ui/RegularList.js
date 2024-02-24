import React, { memo } from 'react';

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  containerStyle,
  itemsContainerStyle,
  listHeader,
  itemProps,
}) => {
  return (
    <section className={containerStyle}>
      {listHeader && listHeader}
      <div className={itemsContainerStyle}>
        {items?.map((item, i) => (
          <ItemComponent key={i} {...{ [resourceName]: item }} {...itemProps} />
        ))}
      </div>
    </section>
  );
};

export default memo(RegularList);
