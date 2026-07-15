import { EXCEPTIONS_NAMES } from '../constants/exception.constants';

export class TitleTypeNotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = EXCEPTIONS_NAMES.NOT_FOUND_TITLE_TYPE;
  }
}
