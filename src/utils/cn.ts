import classNames from 'classnames/bind';

export function createCn(styles: Record<string, string>) {
  return classNames.bind(styles);
}
