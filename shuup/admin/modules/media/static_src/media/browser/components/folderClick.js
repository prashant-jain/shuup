/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2018, Shoop Commerce Ltd. All rights reserved.
 *
 * This source code is licensed under the OSL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export default function(ctrl, folder) {
    return function clickFolder(event) {
        ctrl.setFolder(folder.id);
        event.preventDefault();
        return false;
    };
}
