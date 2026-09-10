import { describe, expect, it } from 'vitest';
import { maskPhone } from './mask-phone';

describe('maskPhone', () => {
  it('aplica a máscara de celular e de fixo', () => {
    expect(maskPhone('48998765432')).toEqual({ valid: true, digits: '48998765432', masked: '(48) 99876-5432' });
    expect(maskPhone('4832321000')).toEqual({ valid: true, digits: '4832321000', masked: '(48) 3232-1000' });
  });

  it('rejeita vazio e tamanho inválido', () => {
    expect(maskPhone('')).toEqual({ valid: false, reason: 'EMPTY' });
    expect(maskPhone('123')).toEqual({ valid: false, reason: 'INVALID_LENGTH' });
  });
});
