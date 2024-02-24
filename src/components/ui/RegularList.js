import React, { memo } from 'react';

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  containerStyle,
  itemsContainerStyle,
  listHeader,
  itemProps,
  listEmptyComponent,
}) => {
  return (
    <section className={containerStyle}>
      {listHeader && listHeader}
      {items?.length > 0 ? (
        <div className={itemsContainerStyle}>
          {items?.map((item, i) => (
            <ItemComponent
              key={i}
              {...{ [resourceName]: item }}
              {...itemProps}
            />
          ))}
        </div>
      ) : (
        listEmptyComponent
      )}
    </section>
  );
};

export default memo(RegularList);
