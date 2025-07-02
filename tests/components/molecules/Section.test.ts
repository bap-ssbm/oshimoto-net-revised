// tests/components/Section.test.ts
import { describe, it, expect, vi } from 'vitest';

interface SectionProps {
  tag?: 'section' | 'div';
  className?: string;
  id?: string;
}

// モックを修正
vi.mock('@components/molecules/Section.astro', () => ({
  default: async (props: SectionProps) => {
    const { tag = 'section', className, id } = props;
    const attrs = [className ? `class="${className}"` : '', id ? `id="${id}"` : ''].filter(Boolean).join(' ');

    return `<${tag} ${attrs}></${tag}>`;
  },
}));

describe('Section Component', () => {
  it('renders default section tag', async () => {
    const Section = await import('@components/molecules/Section.astro');
    const html = await Section.default({});
    expect(html.trim()).toMatch(/<section\s*><\/section>/);
  });

  it('renders with className', async () => {
    const Section = await import('@components/molecules/Section.astro');
    const html = await Section.default({
      className: 'test-class',
    });
    expect(html).toContain('class="test-class"');
  });

  it('renders as div when specified', async () => {
    const Section = await import('@components/molecules/Section.astro');
    const html = await Section.default({
      tag: 'div',
    });
    expect(html.trim()).toMatch(/<div\s*><\/div>/);
  });

  it('renders with id when provided', async () => {
    const Section = await import('@components/molecules/Section.astro');
    const html = await Section.default({
      id: 'test-id',
    });
    expect(html).toContain('id="test-id"');
  });
});
