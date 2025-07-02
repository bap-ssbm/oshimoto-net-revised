export async function renderComponent(Component: any, props = {}) {
  const content = await Component.default(props);
  return {
    html: content.toString(),
  };
}
