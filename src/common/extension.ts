// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END=

import { ObjectKeys, ObjectValues } from "readium-desktop/utils/object-keys-values";

export const acceptedExtensionObject = {
    lcpLicence: ".lcpl",
    epub: ".epub",
    epub3: ".epub3",
    audiobook: ".audiobook",
    audiobookLcp: ".lcpa",
    audiobookLcpAlt: ".lcpaudiobook",
    // pdfLcp: ".lcpdf", // for illustration only, not actually implemented yet
    w3cAudiobook: ".lpf",
};

export const acceptedExtensionArray = ObjectValues(acceptedExtensionObject);

export const acceptedExtension = (ext: string) =>
    ObjectKeys(acceptedExtensionObject).reduce(
        (pv, cv) =>
            pv || isAcceptedExtension(cv, ext),
            false,
    );

export const isAcceptedExtension = (key: keyof typeof acceptedExtensionObject, ext: string) =>
    (new RegExp(`\\${acceptedExtensionObject[key]}$`)).test(ext);
