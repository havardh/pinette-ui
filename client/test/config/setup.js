import sinon from "sinon";
import chai from "chai";
import TestUtils from './test_utils';
import jsdom from 'jsdom';
import Promise from "bluebird";

import * as BaseService from "../../services/base_service";

import chaiHaveXpath from "chai-have-xpath";
import chaiHaveReactComponent from "chai-have-react-component";
import sinonChai from "sinon-chai";

chai.use(chaiHaveXpath);
chai.use(chaiHaveReactComponent);
chai.use(sinonChai);

const sandbox = sinon.sandbox.create();

if (typeof global.document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = global.document.defaultView;
}

beforeEach(() => sandbox.stub(BaseService, "request").returns(Promise.resolve({})));
afterEach(() => sandbox.restore());

global.chai = chai;
global.expect = chai.expect;
global.sinon = sandbox;

global.TestUtils = TestUtils;
