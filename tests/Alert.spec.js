"use strict";
//playwright to handle the alert -> Auto dismiss the alert
//cancle your  alert
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
(0, test_1.default)("Auto dismiss the alert", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, page.goto("https://www.leafground.com/alert.xhtml")];
            case 1:
                _c.sent();
                return [4 /*yield*/, page.locator("//span[text()='Show']").nth(1).click()];
            case 2:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(10000)];
            case 3:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
//Event Listner to handle the alert
//page.on-> handel all the alert which present in the test case
//page.once -> handel only one alert which present in the test case(first alert)
(0, test_1.default)("Handle alert with Page.on Simple alert", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                //handle first alert present in the test case
                page.once('dialog', function (alertType) {
                    // type of alert
                    var type = alertType.type();
                    console.log(type);
                    //alert box what message it has 
                    console.log(alertType.message());
                    //handle alert 
                    alertType.accept();
                });
                return [4 /*yield*/, page.goto("https://www.leafground.com/alert.xhtml")];
            case 1:
                _c.sent();
                return [4 /*yield*/, page.locator("//span[text()='Show']").first().click()];
            case 2:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(10000)
                    // await page.locator("//span[text()='Show']").nth(1).click()
                    // await page.waitForTimeout(10000)
                ];
            case 3:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.default)("Handle Alert with page.on", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                page.on('dialog', function (type) {
                    var alertName = type.type();
                    //alert name=> alert,confirm,prompt
                    console.log(alertName);
                    console.log(type.message());
                    if (alertName === 'confirm') {
                        //alert===confirm
                        //confirm===confirm
                        type.accept();
                    }
                    else {
                        type.accept();
                    }
                });
                return [4 /*yield*/, page.goto("https://www.leafground.com/alert.xhtml")];
            case 1:
                _c.sent();
                return [4 /*yield*/, page.locator("//span[text()='Show']").first().click()
                    //alert=> simple alert
                ];
            case 2:
                _c.sent();
                //alert=> simple alert
                return [4 /*yield*/, page.waitForTimeout(10000)];
            case 3:
                //alert=> simple alert
                _c.sent();
                return [4 /*yield*/, page.locator("//span[text()='Show']").nth(1).click()];
            case 4:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(10000)];
            case 5:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
test_1.default.only("handle the sweet alert", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, page.goto("https://www.leafground.com/alert.xhtml")];
            case 1:
                _c.sent();
                return [4 /*yield*/, page.locator("//span[text()='Show']").nth(2).click()];
            case 2:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(3000)];
            case 3:
                _c.sent();
                return [4 /*yield*/, page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()];
            case 4:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(10000)];
            case 5:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
