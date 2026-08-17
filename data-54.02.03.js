const BASE_54_02_03_DATA = {
  version: "54.02.03",
  brands: {
    "Bennett": {
      generalNote: 'See <a href="https://www.vfne.co/verifone-petro-emv-updates" target="_blank">https://www.vfne.co/verifone-petro-emv-updates</a> for Outdoor EMV Implementation Status updates.',
      platforms: {
        "SSP (Simply Secure Payment)": {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV", minimumVersion: "XXXXXX.10.10.07" }
          ],
          notes: [
            'The "XXXXXX" number is based on hardware revision.',
            'Upgrade to EMV version XXXXXX.10.10.09, if the site is experiencing "Remove Card" message remaining on the display after the card has been removed until timeout.'
          ]
        },
        "DCA": {
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
      generalNote: 'See <a href="https://www.vfne.co/verifone-petro-emv-updates" target="_blank">https://www.vfne.co/verifone-petro-emv-updates</a> for Outdoor EMV Implementation Status updates.<br>When connecting the Verifone Commander Ethernet cable to a DCR Serial Converter for Outdoor EMV, the wires routed from the converter to the DCR must be twisted pair.',
      platforms: {
        "FlexPay IV (M7)": {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV (PCI DSS 5.0)", minimumVersion: "52.12.45" },
            { option: "EMV (PCI DSS 4.0)", minimumVersion: "42.12.45" },
            { option: "Graphics", minimumVersion: "42.05.11 - P609" },
            { option: "Applause (Graphics)", minimumVersion: "42.05.11 - P609" },
            { option: "Cash Acceptors", minimumVersion: "42.05.11 - P609" },
            { option: "Scanner", minimumVersion: "" },
            { option: "Contactless (RFID) with UX 400", minimumVersion: "42.05.11 - P609" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "42.05.11 - P609" },
            { option: "TDES", minimumVersion: "42.05.11 - P609" }
          ],
          notes: [
            'If the site has FlexPay IV v42.11.47 or v52.11.47 and debit transactions are receiving an "INVALID PIN" response from the host, Gilbarco has corrected this with the v42.11.53 and v52.11.53 software releases.',
            "Cash Acceptors are not supported with EMV.",
            "GSM, SDES, and Master Session are not supported."
          ]
        },
        "FlexPay II (M5)": {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV", minimumVersion: "3.6.06" },
            { option: "Graphics", minimumVersion: "30.3.03" },
            { option: "Cash Acceptors", minimumVersion: "30.3.03" },
            { option: "Scanner", minimumVersion: "" },
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
            { option: "Non-debit", minimumVersion: "50.2.4" }
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
            { crindModel: "Advantage", model: "Advantage", minimumVersion: "62.6.10", recommendedMinimumVersion: "62.6.10", version: "62.6.10" },
            { crindModel: "Encore 300", model: "Encore 300", minimumVersion: "62.6.10", recommendedMinimumVersion: "62.6.10", version: "62.6.10" },
            { crindModel: "Encore 500", model: "Encore 500", minimumVersion: "3.1.50", recommendedMinimumVersion: "3.1.50", version: "3.1.50" },
            { crindModel: "Eclipse", model: "Eclipse", minimumVersion: "3.1.50", recommendedMinimumVersion: "3.1.50", version: "3.1.50" }
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
            { option: "GSM", minimumVersion: "" },
            { option: "Graphics: Monochrome", minimumVersion: "60.9.40" },
            { option: "Graphics: InfoScreen", minimumVersion: "60.9.40" },
            { option: "Scanner", minimumVersion: "60.9.40" },
            { option: "Contactless (RFID)", minimumVersion: "60.9.40" }
          ],
          debit: [
            { option: "Non-debit", minimumVersion: "60.9.40" },
            { option: "SDES (DUKPT)", minimumVersion: "60.9.40" }
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
            { option: "GSM", minimumVersion: "" },
            { option: "Graphics: Monochrome", minimumVersion: "60.9.40" },
            { option: "Graphics: InfoScreen", minimumVersion: "60.9.40" },
            { option: "Scanner", minimumVersion: "60.9.40" },
            { option: "Contactless (RFID)", minimumVersion: "60.9.40" }
          ],
          debit: [
            { option: "Non-debit", minimumVersion: "60.9.40" },
            { option: "SDES (DUKPT)", minimumVersion: "60.9.40" }
          ],
          notes: [
            "InfoScreen graphics are supported only in single-line mode.",
            "Version 60.7.30 is NOT supported for any mode.",
            "TDES and Master Session are not supported."
          ]
        },
        "Encore 500/Eclipse": {
          supportedOptions: [
            { option: "Cash Acceptors", minimumVersion: "" },
            { option: "GSM", minimumVersion: "" },
            { option: "Graphics: Monochrome", minimumVersion: "" }
          ],
          debit: [
            { option: "Non-debit", minimumVersion: "" },
            { option: "SDES (DUKPT)", minimumVersion: "" }
          ],
          notes: [
            "Contactless (RFID), TDES and M/S are not supported."
          ]
        }
      }
    },
    "Invenco": {
      generalNote: 'See <a href="https://www.vfne.co/verifone-petro-emv-updates" target="_blank">https://www.vfne.co/verifone-petro-emv-updates</a> for Outdoor EMV Implementation Status updates.<br>Invenco / GVR DCR products have been rebranded as FlexPay 6. FlexPay 6 is not supported in all applications.',
      platforms: {
        'FlexPay 6 All-In-One 9" A2-09 (AKA, G6-400)': {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV Firmware", minimumVersion: "3.2.21" },
            { option: "EMV Adapter", minimumVersion: "1.06.0159" }
          ]
        },
        'FlexPay 6 All-In-One 5" A1-05 (AKA, G6-300)': {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV Firmware", minimumVersion: "3.2.21" },
            { option: "EMV Adapter", minimumVersion: "1.06.0159" }
          ]
        },
        'FlexPay 6 Modular 15" M1-15 (AKA, G7-100)': {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "EMV Firmware", minimumVersion: "3.2.21" },
            { option: "EMV Adapter", minimumVersion: "1.06.0159" }
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
            { option: "Debit TDS Plus (4-line display) SDES (DUKPT)", minimumVersion: "MT0301.00" },
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
            "Scanner, TDES, and Debit TED (4-line display) Master Session are not supported."
          ]
        }
      }
    },
    "Wayne": {
      generalNote: 'See <a href="https://www.vfne.co/verifone-petro-emv-updates" target="_blank">https://www.vfne.co/verifone-petro-emv-updates</a> for Outdoor EMV Implementation Status updates.<br>When connecting the Commander Ethernet cable to a DCR Serial Converter for Outdoor EMV, the wires routed from the converter to the DCR must be twisted pair.',
      dispenserSoftware: [
        { dispenser: "Ovation", description: "iGem", version: "85", modelMatch: ["Ovation and Ovation 2 with qCAT"] },
        { dispenser: "iX", description: "iGem", version: "85", modelMatch: ["iX Pay 2, 3.1 Series", "iX Pay 1, 2.8 Series", "iX — Blue Board"] },
        { dispenser: "Vista 3V", description: "iGem", version: "49", modelMatch: ["Vista3V"] },
        { dispenser: "Vista 2V", description: "Dispenser", version: "14", modelMatch: ["Dual CAT", "Legacy CAT"] },
        { dispenser: "Vista 1V (See first note below)", description: "Dispenser", version: "49", modelMatch: ["Dual CAT", "Legacy CAT"] },
        { dispenser: "Vista", description: "Dispenser", version: "See second note below", modelMatch: ["Dual CAT", "Legacy CAT"] },
        { dispenser: "SC-82", description: "Dispenser", version: "See second note below", modelMatch: ["Legacy CAT"] }
      ],
      dispenserSoftwareNotes: [
        "For Model V490D1/U (Vista 1V), the version must be 47.",
        "The dispenser must be programmed as one of the following types: Type 1, 2, 30 or 40. Verifone Commander will not support the dispenser programmed as any other type, including Types 3 through 29."
      ],
      platforms: {
        "iX Pay 2, 3.1 Series": {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          emvStatus: [
            { mode: "NFC Mode > Contactless", firmware: "3.1.203.1260", reader: "C150S", readerFirmware: "26100A02", buildRevision: "21031801" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "3.1.203.1260", reader: "C150S", readerFirmware: "26100A02", buildRevision: "21031801" }
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
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          emvStatus: [
            { mode: "NFC Mode > Contactless", firmware: "2.8.203.9", reader: "C150", readerFirmware: "2610EA02", buildRevision: "21032201" },
            { mode: "NFC Mode > Contactless", firmware: "2.8.203.9", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "21031901" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.105.109", reader: "C150", readerFirmware: "2610EA02", buildRevision: "18050901" },
            { mode: "NFC Mode > Contactless Disabled", firmware: "2.8.105.109", reader: "C150S_NP", readerFirmware: "2610FA02", buildRevision: "19020101" }
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
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "Contact/Contactless EMV", minimumVersion: "3.1.207.430" },
            { option: "ANTX", minimumVersion: "1.20.4.130" }
          ],
          notes: [
            "Cash Acceptors are not supported with EMV.",
            "Prior to upgrade to Wayne EMV software, please check the minimum version with Wayne."
          ]
        },
        "Anthem (AX12, AX27)": {
          emvCertification: {
            contact: "Certified",
            contactless: "Certified"
          },
          supportedOptions: [
            { option: "Contact/Contactless EMV", minimumVersion: "3.1.207.430" },
            { option: "ANTX", minimumVersion: "1.20.4.130" }
          ],
          notes: [
            "Cash Acceptors are not supported with EMV.",
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
        "Ovation and Ovation 2 with qCAT": {
          supportedOptions: [
            { option: "Graphics", minimumVersion: "206.00" },
            { option: "Scanner", minimumVersion: "206.00" }
          ],
          debit: [
            { option: "Non-Debit", minimumVersion: "206.00" },
            { option: "SDES (DUKPT)", minimumVersion: "206.00" }
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
            { option: "SDES (DUKPT)", minimumVersion: "103.00" }
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
            { option: "SDES (DUKPT)", minimumVersion: "103.00" }
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
            { option: "Non-debit (not enhanced)", minimumVersion: "58.00" },
            { option: "SDES (DUKPT)", minimumVersion: "64.00" }
          ],
          notes: [
            "DSM, TDES, and Master Session are not supported."
          ]
        }
      }
    }
  }
};