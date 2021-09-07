export const renderUsersList = (render, users, ...className) => {
  render = render ?? (() => {});

  return users.map((user) => {
    return render({
      className: className?.reduce((totalClassName, className) => {
        return `${totalClassName} ${className}`;
      }, ""),
      key: user.id,
      user: user,
    });
  });
};
