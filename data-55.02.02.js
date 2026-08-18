const BASE_55_02_02_DATA = {
  version: "Base 55.02.02",
  generalNote: "In 55.00.01, Shell support for Invenco dispensers was classified as Beta (No). This was upgraded to fully supported (Yes) in version 55.01.01+",
  brands: {
    "Bennett": {
      generalNote: "See https://www.vfne.co/verifone-petro-emv-updates for Outdoor EMV Implementation Status updates.",
      platforms: {
        "SSP (Simply Secure Payment)": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "EMV", minimumVersion: "XXXXXX.10.10.07" },
            { option: "Visa Fleet 2.0/WEX 4.1", minimumVersion: "XXXXXX.10.10.11" }
          ],
          notes: [
            "The \"XXXXXX\" number is based on hardware revision.",
            "Upgrade to EMV version XXXXXX.10.10.09, if the site is experiencing \"Remove Card\" message remaining on the display after the card has been removed until timeout."
          ]
        },
        "DCA": {
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "Non-debit", minimumVersion: "N/A" }
          ],
          debit: [
            { option: "Non-debit", minimumVersion: "N/A" }
          ],
          notes: [
            "Cash Acceptors, Debit, Graphics, SDES, TDES, and Master Session are not supported."
          ]
        },
        "DCT (Verifone Everest Card Reader)": {
          debit: [
            { option: "Non-debit", minimumVersion: "1.02.02" },
            { option: "SDES (DUKPT)", minimumVersion: "1.02.02" }
          ],
          notes: [
            "Cash Acceptors, Graphics, TDES, and Master Session are not supported."
          ]
        }
      }
    },
    "Gilbarco": {
      generalNote: "See https://www.vfne.co/verifone-petro-emv-updates for Outdoor EMV Implementation Status updates. When connecting the Commander Ethernet cable to a DCR Serial Converter for Outdoor EMV, the wires routed from the converter to the DCR must be twisted pair.",
      dispenserSoftwareNotes: [
        "Gilbarco Pre-modular dispensers must be on a separate board and as such are not supported with Verifone RubyCi, as there is only one connection out for fuel."
      ],
      dispenserSoftware: [
        { modelMatch: [], dispenser: "Encore 700", description: "Pump Control Node", version: "2.9.42" },
        { modelMatch: ["Encore 500/Eclipse"], dispenser: "Encore 500", description: "Pump Control Node", version: "1.8.30" },
        { modelMatch: ["Encore 300"], dispenser: "Encore 300", description: "Digital Valve", version: "20.1.10" },
        { modelMatch: ["Encore 300"], dispenser: "Encore 300", description: "Digital Valve with Enhanced Security", version: "20.2.24" },
        { modelMatch: ["Encore 300"], dispenser: "Encore 300", description: "Proportional Valve", version: "10.1.10" },
        { modelMatch: ["Encore 300"], dispenser: "Encore 300", description: "Proportional Valve with Enhanced Security", version: "10.2.23" },
        { modelMatch: [], dispenser: "MPD", description: "Legacy", version: "70.9.92" },
        { modelMatch: [], dispenser: "MPD", description: "Modular Advantage", version: "70.9.92" },
        { modelMatch: [], dispenser: "MPD-3", description: "LCDs", version: "54.3.10" },
        { modelMatch: [], dispenser: "MPD-3", description: "SIDs", version: "53.7" },
        { modelMatch: [], dispenser: "Selectable Blender", description: "Modular Advantage", version: "75.6.10" }
      ],
      platforms: {
        "FlexPay IV (M7)": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "EMV Non-Fleet 2.0 (PCI DSS 5.0)", minimumVersion: "52.12.45" },
            { option: "EMV Non-Fleet 2.0 (PCI DSS 4.0)", minimumVersion: "42.12.45" },
            { option: "Fleet 2.0 Version (PCI DSS 5.0)", minimumVersion: "FPIVOPT_V05.13.10_US00.07" },
            { option: "Fleet 2.0 Version (PCI DSS 4.0)", minimumVersion: "FPIVOPT_V04.13.10_US00.07" },
            { option: "Fleet 2.0 VIPA", minimumVersion: "6.8.2.32" },
            { option: "Graphics", minimumVersion: "42.05.11 - P609" },
            { option: "Applause (Graphics)", minimumVersion: "42.05.11 - P609" },
            { option: "Cash Acceptors", minimumVersion: "42.05.11 - P609" },
            { option: "Contactless (RFID) with UX 400", minimumVersion: "42.05.11 - P609" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "42.05.11 - P609" },
            { option: "TDES", minimumVersion: "42.05.11 - P609" }
          ],
          notes: [
            "For Chevron sites, use 6.8.2.25-x VIPA instead of 6.8.2.32.",
            "If the site has FlexPay IV v42.11.47 or v52.11.47 and debit transactions are receiving an \"INVALID PIN\" response from the host, Gilbarco has corrected this with the v42.11.53 and v52.11.53 software releases.",
            "Cash Acceptors are not supported with EMV.",
            "GSM, SDES, and Master Session are not supported."
          ]
        },
        "FlexPay II (M5)": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "EMV Support", minimumVersion: "3.6.06" },
            { option: "Graphics", minimumVersion: "30.3.03" },
            { option: "Cash Acceptors", minimumVersion: "30.3.03" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "30.3.03" },
            { option: "TDES", minimumVersion: "30.3.03" }
          ],
          notes: [
            "Cash Acceptors are not supported with EMV.",
            "Contactless (RFID), GSM, SDES, and Master Session are not supported."
          ]
        },
        "Z80 Logic Board": {
          debit: [
            { option: "Non-Debit", minimumVersion: "50.2.4" }
          ],
          notes: [
            "Cash Acceptors, GSM, Graphics, Scanner, Contactless (RFID), SDES, TDES, and Master Session are not supported."
          ]
        },
        "Encrypting PIN Pad (EPP) with Advanced GSM": {
          supportedOptions: [
            { option: "Advanced GSM", minimumVersion: "See CRIND versions below." },
            { option: "Graphics", minimumVersion: "See CRIND versions below." },
            { option: "Scanner", minimumVersion: "See CRIND versions below." },
            { option: "Contactless (RFID)", minimumVersion: "See CRIND versions below." }
          ],
          debit: [
            { option: "SDES (DUKPT)", minimumVersion: "See CRIND versions below." },
            { option: "TDES", minimumVersion: "See CRIND versions below." }
          ],
          crinds: [
            { option: "Advantage", minimumVersion: "62.6.10" },
            { option: "Encore 300", minimumVersion: "62.6.10" },
            { option: "Encore 500", minimumVersion: "3.1.50" },
            { option: "Eclipse", minimumVersion: "3.1.50" }
          ],
          notes: [
            "An Advanced GSM is not required if EPP is injected with the correct debit key. However, it can be used until the EPPs are injected with the correct debit key.",
            "Master Session and Cash Acceptors are not supported.",
            "Please contact your Gilbarco servicer for the correct setup of the EPP and the mapping of the keypad."
          ]
        },
        "Advantage CRIND (Z180 Logic Board)": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "60.9.40" },
            { option: "Graphics: Monochrome", minimumVersion: "609.40" },
            { option: "Graphics: InfoScreen", minimumVersion: "609.40" },
            { option: "Scanner", minimumVersion: "609.40" },
            { option: "Contactless (RFID)", minimumVersion: "609.40" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "60.9.40" },
            { option: "TDES", minimumVersion: "60.9.40" }
          ],
          notes: [
            "InfoScreen graphics are supported only in single-line mode.",
            "Version 60.7.30 is NOT supported for any mode.",
            "TDES and Master Session are not supported."
          ]
        },
        "Encore 300": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "60.9.40" },
            { option: "Graphics: Monochrome", minimumVersion: "609.40" },
            { option: "Graphics: InfoScreen", minimumVersion: "609.40" },
            { option: "Scanner", minimumVersion: "609.40" },
            { option: "Contactless (RFID)", minimumVersion: "609.40" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "60.9.40" },
            { option: "TDES", minimumVersion: "60.9.40" }
          ],
          notes: [
            "InfoScreen graphics are supported only in single-line mode.",
            "Version 60.7.30 is NOT supported for any mode.",
            "TDES and Master Session are not supported."
          ]
        },
        "Encore 500/Eclipse": {
          notes: [
            "Contactless (RFID), TDES and M/S are not supported."
          ]
        }
      }
    },
    "Invenco by GVR": {
      generalNote: "See https://www.vfne.co/verifone-petro-emv-updates for Outdoor EMV Implementation Status updates. Invenco / GVR DCR products have been rebranded as FlexPay 6. FlexPay 6 is not supported in all applications.",
      compatibilityNotes: [
        "In base version 55.00.01, Shell support for Invenco dispensers was classified as Beta (No).",
        "Full support (Yes) for Invenco dispensers on Shell was introduced in version 55.01.01+."
      ],
      platforms: {
        "FlexPay 6 Outdoor Payment Terminals": {
          models: [
            { model: "G6-300", description: "5\" All-In-One", name: "FlexPay 6 A1-05" },
            { model: "G7-100", description: "15\" Modular", name: "FlexPay 6 M1-15" },
            { model: "G6-400", description: "9\" All-In-One Next Generation", name: "FlexPay 6 A2-09" },
            { model: "G6-500", description: "5\" Compact All-In-One", name: "FlexPay 6 A2-05" },
            { model: "G6-500 15D", description: "15\" Modular Next Generation", name: "FlexPay 6 M2-15" }
          ],
          emvSupport: { contact: "Certified", contactless: "Certified" },
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "EMV Firmware (Non-Fleet 2.0)", minimumVersion: "3.2.21" },
            { option: "EMV Adapter (Non-Fleet 2.0)", minimumVersion: "1.06.0159" },
            { option: "EMV Firmware (Supports Visa Fleet 2.0 Support)", minimumVersion: "R3.2.28c" },
            { option: "EMV Adapter (Supports Visa Fleet 2.0 Support)", minimumVersion: "01.08.0132" }
          ],
          notes: [
            "In base version 55.00.01, Shell support for Invenco dispensers was classified as Beta (No).",
            "Full support (Yes) for Invenco dispensers on Shell was introduced in version 55.01.01."
          ]
        }
      }
    },
    "Tokheim": {
      platforms: {
        "Premier B": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "N/A" },
            { option: "TED", minimumVersion: "v300 or v400" }
          ],
          debit: [
            { option: "Non-debit (4-line display)", minimumVersion: "JP02.18.00" },
            { option: "SDES (DUKPT)", minimumVersion: "MT0301.00" },
            { option: "Debit TED (4-line display) SDES (DUKPT)", minimumVersion: "MTQD02.00" },
            { option: "Insight Graphics Non-debit", minimumVersion: "MTPQ06.03" },
            { option: "Insight Graphics SDES (DUKPT)", minimumVersion: "MTPQ06.03" }
          ],
          notes: [
            "Scanner, TDES, Debit TED (4-line display) Master Session, Debit TDS Plus (4-line display) and Master Session are not supported."
          ]
        },
        "Premier C": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "N/A" },
            { option: "TED", minimumVersion: "v300 or v400" }
          ],
          debit: [
            { option: "Non-debit (4-line display)", minimumVersion: "JP02.18.00" },
            { option: "Debit TED (4-line display) SDES (DUKPT)", minimumVersion: "MTQD02.00" },
            { option: "Insight Graphics Non-debit", minimumVersion: "MTPQ06.03" },
            { option: "Insight Graphics SDES (DUKPT)", minimumVersion: "MTPQ06.03" }
          ],
          notes: [
            "Scanner, TDES, Debit TED (4-line display) Master Session, Debit TDS Plus (4-line display) and Master Session are not supported."
          ]
        }
      }
    },
    "Dresser/Wayne": {
      generalNote: "See https://www.vfne.co/verifone-petro-emv-updates for Outdoor EMV Implementation Status updates. When connecting the Commander Ethernet cable to a DCR Serial Converter for Outdoor EMV, the wires routed from the converter to the DCR must be twisted pair.",
      dispenserSoftwareNotes: [
        "For Model V490D1/U (Vista 1V), the version must be 47.",
        "The dispenser must be programmed as one of the following types: Type 1, 2, 30 or 40. Verifone Commander will not support the dispenser programmed as any other type, including Types 3 through 29."
      ],
      dispenserSoftware: [
        { modelMatch: ["Ovation"], dispenser: "Ovation", description: "iGem", version: "85" },
        { modelMatch: ["iX Pay 1, 2.8 Series", "iX Pay 2, 3.1 Series", "iX — Blue Board"], dispenser: "iX", description: "iGem", version: "85" },
        { modelMatch: ["Vista3V"], dispenser: "Vista 3V", description: "iGem", version: "49" },
        { modelMatch: [], dispenser: "Vista 2V", description: "Dispenser", version: "14" },
        { modelMatch: [], dispenser: "Vista 1V (See first note below)", description: "Dispenser", version: "49" },
        { modelMatch: [], dispenser: "Vista", description: "Dispenser", version: "See second note below" },
        { modelMatch: [], dispenser: "SC-82", description: "Dispenser", version: "See second note below" }
      ],
      platforms: {
        "Visa Fleet 2.0 / WEX 4.1 Support": {
          supportedOptionsHeader: "Minimum Version",
          supportedOptions: [
            { option: "Visa Fleet 2.0 / WEX 4.1 Support", minimumVersion: "3.1.212.1130" },
            { option: "ANTX", minimumVersion: "1.22.5.326" }
          ],
          notes: [
            "Cash Acceptors, Graphics, TDES, and Master Session are not supported.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne."
          ]
        },
        "iX Pay 2, 3.1 Series": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          emvStatus: [
            { mode: "NFC Mode > Contactless", firmware: "3.1.203.1260", reader: "C150S", readerFirmware: "26100A02", buildRevision: "21031801" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "3.1.203.1260", reader: "C150S", readerFirmware: "26100A02", buildRevision: "21031801" }
          ],
          visaFleet2Wex41Support: [
            { mode: "Visa Fleet 2.0 / WEX 4.1 Support", firmware: "3.1.207.430", reader: "C150S", readerFirmware: "26100A02", buildRevision: "21122402" }
          ],
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "N/A" },
            { option: "Graphics", minimumVersion: "3.1.203.1260" },
            { option: "Scanner", minimumVersion: "2D Zebra DS45" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "3.1.203.1260" },
            { option: "TDES", minimumVersion: "3.1.203.1260" }
          ],
          notes: [
            "Jade board is recommended for outdoor EMV. Red board can be used if non-media site.",
            "Cash Acceptors are not supported with EMV.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne.",
            "DSM, Secure CAT, SDES, and Master Session are not supported."
          ]
        },
        "iX Pay 1, 2.8 Series": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          emvStatus: [
            { mode: "NFC Mode > Contactless", firmware: "2.8.203.9", reader: "C150", readerFirmware: "2610EA02", buildRevision: "21032201" },
            { mode: "NFC Mode > Contactless", firmware: "2.8.203.9", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "21031901" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.105.109", reader: "C150", readerFirmware: "2610EA02", buildRevision: "21032201" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.105.109", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "21032201" }
          ],
          visaFleet2Wex41Support: [
            { mode: "NFC Mode > Contactless", firmware: "2.8.205.9", reader: "C150", readerFirmware: "261EA02", buildRevision: "21032201" },
            { mode: "NFC Mode > Contactless", firmware: "2.8.205.9", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "21110301" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.205.9", reader: "C150", readerFirmware: "261EA02", buildRevision: "21032201" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.205.9", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "21110301" }
          ],
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "2.5.15.0" },
            { option: "Graphics", minimumVersion: "2.5.15.0" },
            { option: "Scanner", minimumVersion: "2.5.15.0" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "2.5.15.0" },
            { option: "TDES", minimumVersion: "2.5.15.0" }
          ],
          notes: [
            "Jade board is recommended for outdoor EMV. Red board can be used if non-media site.",
            "Cash Acceptors are not supported with EMV.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne.",
            "DSM, Secure CAT, SDES, and Master Session are not supported."
          ]
        },
        "Anthem": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          debit: [
            { option: "Contact/Contactless EMV", minimumVersion: "3.1.207.430" },
            { option: "Visa Fleet 2.0/WEX 4.1 Support", minimumVersion: "3.1.212.1130" },
            { option: "ANTX", minimumVersion: "1.20.4.130" },
            { option: "ANTX (Visa Fleet 2.0/WEX 4.1 Support)", minimumVersion: "1.22.5.326" }
          ],
          notes: [
            "Cash Acceptors, Graphics, TDES, and Master Session are not supported.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne."
          ]
        },
        "Anthem (AX12, AX27)": {
          emvSupport: { contact: "Certified", contactless: "Certified" },
          debit: [
            { option: "Contact/Contactless EMV", minimumVersion: "3.1.207.430" },
            { option: "Visa Fleet 2.0/WEX 4.1 Support", minimumVersion: "3.1.212.1130" },
            { option: "ANTX", minimumVersion: "1.20.4.130" },
            { option: "ANTX (Visa Fleet 2.0/WEX 4.1 Support)", minimumVersion: "1.22.5.326" }
          ],
          notes: [
            "Cash Acceptors, Graphics, TDES, and Master Session are not supported.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne."
          ]
        },
        "iX — Blue Board": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "1.3.8.0" },
            { option: "Graphics", minimumVersion: "1.3.8.0" },
            { option: "Scanner", minimumVersion: "1.3.8.0" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "1.3.8.0" },
            { option: "TDES", minimumVersion: "1.3.8.0" }
          ],
          notes: [
            "DSM, Secure CAT, SDES, and Master Session are not supported."
          ]
        },
        "Ovation / Ovation 2 with qCAT": {
          supportedOptions: [
            { option: "Graphics", minimumVersion: "206.00" },
            { option: "Scanner", minimumVersion: "206.00" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "206.00" },
            { option: "TDES", minimumVersion: "206.00" }
          ],
          notes: [
            "Cash Acceptors, DSM, Secure CAT, TDES, and Master Session are not supported."
          ]
        },
        "Vista3V": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "103.00" },
            { option: "Graphics", minimumVersion: "103.00" },
            { option: "Scanner", minimumVersion: "103.00" },
            { option: "BCB", minimumVersion: "5.1" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "103.00" },
            { option: "TDES", minimumVersion: "103.00" }
          ],
          notes: [
            "DSM, Secure CAT, TDES, and Master Session are not supported."
          ]
        },
        "Dual CAT": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "103.00" },
            { option: "Graphics", minimumVersion: "103.00" },
            { option: "Scanner", minimumVersion: "103.00" },
            { option: "BCB", minimumVersion: "5.1" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "103.00" },
            { option: "TDES", minimumVersion: "103.00" }
          ],
          notes: [
            "DSM, Secure CAT, TDES, and Master Session are not supported."
          ]
        },
        "Legacy CAT": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "64.00" },
            { option: "Graphics", minimumVersion: "64.00" },
            { option: "Scanner", minimumVersion: "64.00" },
            { option: "Secure CAT", minimumVersion: "2.01" }
          ],
          debit: [
            { option: "Non-Debit (not enhanced)", minimumVersion: "58.00" },
            { option: "TDES", minimumVersion: "54.00" }
          ],
          notes: [
            "DSM, TDES, and Master Session are not supported."
          ]
        }
      }
    }
  }
};
