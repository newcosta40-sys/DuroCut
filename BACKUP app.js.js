// --- DADOS DE APLICATIVO ---

// Banco de Dados de Materiais ISO e suas constantes padrão
const ISO_MATERIALS = {
    "p-aco": { name: "ISO P - Aço Carbono", kc: 1900, vc: 220, label: "Aço de fácil usinagem, aços liga, aços carbono." },
    "m-inox": { name: "ISO M - Inox", kc: 2200, vc: 160, label: "Aços inoxidáveis austeníticos, duplex e martensíticos." },
    "k-fofo": { name: "ISO K - Fofo", kc: 1200, vc: 200, label: "Ferro fundido cinzento, nodular e maleável." },
    "n-al": { name: "ISO N - Alumínio", kc: 700, vc: 600, label: "Ligas de alumínio, cobre, bronze e não-ferrosos." },
    "s-super": { name: "ISO S - Superligas", kc: 2800, vc: 50, label: "Superligas à base de Níquel (Inconel), Cobalto e Titânio." },
    "h-duro": { name: "ISO H - Temperados", kc: 3500, vc: 80, label: "Aços endurecidos/temperados (45-65 HRC)." }
};

// Banco de Dados Completo de Seleção de Ferramentas (ISO P, M, K, N, S, H)
const TOOL_SELECTION_DB = {
    "P": { // Aço Carbono e Liga
        "torneamento": {
            "acabamento": {
                grade: "HC-P10 (CVD)",
                geometry: "CNMG 120404-FF",
                coating: "CVD Ti(C,N) + Al₂O₃ + TiN (Excelente resistência ao desgaste por abrasão)",
                vc_range: [220, 320],
                feed_range: [0.08, 0.18],
                ap_range: [0.2, 1.5],
                kc: 1700,
                holders: {
                    "20x20": "DCLNR 2020K12",
                    "25x25": "DCLNR 2525M12",
                    "32x32": "DCLNR 3232P12",
                    "d20": "A20S-SDQCR11 (Interno)",
                    "d25": "A25T-SDQCR11 (Interno)",
                    "d32": "A32U-SDQCR11 (Interno)"
                }
            },
            "medio": {
                grade: "HC-P25 (CVD)",
                geometry: "CNMG 120408-PM",
                coating: "CVD MTCVD TiCN + Al₂O₃ (Excelente tenacidade e resistência térmica)",
                vc_range: [180, 260],
                feed_range: [0.15, 0.35],
                ap_range: [1.0, 4.0],
                kc: 1900,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "HC-P35 (CVD)",
                geometry: "SNMG 190612-PR",
                coating: "CVD TiCN + Al₂O₃ Espessa (Suporta grandes profundidades e impactos)",
                vc_range: [120, 200],
                feed_range: [0.25, 0.55],
                ap_range: [3.0, 8.0],
                kc: 2100,
                holders: {
                    "20x20": "PSSNL 2020K12",
                    "25x25": "PSSNL 2525M19",
                    "32x32": "PSSNL 3232P19",
                    "d20": "A20S-PDUNR11 (Interno)",
                    "d25": "A25T-PDUNR11 (Interno)",
                    "d32": "A32U-PDUNR15 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "HC-P30 (CVD)",
                geometry: "SEMT 120408-PH",
                coating: "CVD AlTiN (Alta estabilidade térmica sob corte circular)",
                vc_range: [160, 240],
                feed_range: [0.12, 0.28],
                ap_range: [1.0, 5.0],
                kc: 1800,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045 (Cabeçote D50)",
                    "BT40": "Porta-Fresa BT40-FMA22-060 (Cabeçote D50)",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075 (Cabeçote D80)",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075 (Cabeçote D50)",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080 (Cabeçote D80)"
                }
            },
            "cavidades": {
                grade: "HC-P25 (PVD)",
                geometry: "APKT 1604PDER-PM",
                coating: "PVD AlCrN (Tenacidade superior para furos e cavidades interrompidas)",
                vc_range: [140, 220],
                feed_range: [0.10, 0.20],
                ap_range: [1.0, 4.5],
                kc: 1900,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER25-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "HC-P35 (PVD)",
                geometry: "SDMT 120412-HF",
                coating: "PVD TiAlN Nano (Alta dureza a quente com excelente avanço)",
                vc_range: [120, 180],
                feed_range: [0.60, 1.20],
                ap_range: [0.5, 1.5],
                kc: 2000,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "HC-P35 (PVD)",
                geometry: "SPMT 090408-DG (Pastilhas Intercambiáveis D20)",
                coating: "PVD TiAlCrN (Resistência ao desgaste e excelente remoção de cavaco)",
                vc_range: [80, 140],
                feed_range: [0.12, 0.25],
                ap_range: [60, 60],
                kc: 1900,
                holders: {
                    "BT30": "Mandril Weldon BT30-SLA20-060",
                    "BT40": "Mandril Weldon BT40-SLA20-070",
                    "BT50": "Mandril Weldon BT50-SLA20-080",
                    "HSK63": "Mandril Weldon HSK63A-SLA20-075",
                    "HSK100": "Mandril Weldon HSK100A-SLA20-090"
                }
            },
            "alargamento": {
                grade: "Substrato HM",
                geometry: "Alargador Integral de D12 H7",
                coating: "PVD AlTiN de Fina Espessura (Máxima precisão dimensional)",
                vc_range: [15, 30],
                feed_range: [0.15, 0.40],
                ap_range: [0.1, 0.3],
                kc: 2200,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    },
    "M": { // Aço Inoxidável
        "torneamento": {
            "acabamento": {
                grade: "HC-M15 (PVD)",
                geometry: "CNMG 120404-SF",
                coating: "PVD TiAlN + TiN (Aresta viva polida, evita endurecimento do inox)",
                vc_range: [150, 220],
                feed_range: [0.06, 0.15],
                ap_range: [0.2, 1.2],
                kc: 2000,
                holders: {
                    "20x20": "DCLNR 2020K12",
                    "25x25": "DCLNR 2525M12",
                    "32x32": "DCLNR 3232P12",
                    "d20": "A20S-SDQCR11 (Interno)",
                    "d25": "A25T-SDQCR11 (Interno)",
                    "d32": "A32U-SDQCR11 (Interno)"
                }
            },
            "medio": {
                grade: "HC-M25 (CVD)",
                geometry: "CNMG 120408-SM",
                coating: "CVD MTCVD TiCN + Al₂O₃ (Combate à deformação plástica e atrito do cavaco)",
                vc_range: [120, 180],
                feed_range: [0.12, 0.30],
                ap_range: [1.0, 3.5],
                kc: 2200,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "HC-M35 (PVD)",
                geometry: "SNMG 120412-SR",
                coating: "PVD AlCrN Multi-camada (Segurança contra lascamentos térmicos)",
                vc_range: [80, 140],
                feed_range: [0.20, 0.45],
                ap_range: [2.5, 6.0],
                kc: 2400,
                holders: {
                    "20x20": "PSSNL 2020K12",
                    "25x25": "PSSNL 2525M12",
                    "32x32": "PSSNL 3232P12",
                    "d20": "A20S-PDUNR11 (Interno)",
                    "d25": "A25T-PDUNR11 (Interno)",
                    "d32": "A32U-PDUNR15 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "HC-M30 (PVD)",
                geometry: "SEMT 120408-MH",
                coating: "PVD AlCrN (Resistente à fadiga térmica em cortes intermitentes)",
                vc_range: [110, 170],
                feed_range: [0.10, 0.22],
                ap_range: [1.0, 4.0],
                kc: 2100,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            },
            "cavidades": {
                grade: "HC-M35 (PVD)",
                geometry: "APKT 1604PDER-M",
                coating: "PVD AlTiN + TiN (Prevenção de adesão / aresta postiça)",
                vc_range: [90, 150],
                feed_range: [0.08, 0.16],
                ap_range: [1.0, 4.0],
                kc: 2200,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER25-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "HC-M40 (PVD)",
                geometry: "SDMT 120412-HF",
                coating: "PVD TiAlN Nano (Alta tenacidade contra lascamento sob alto avanço)",
                vc_range: [80, 130],
                feed_range: [0.50, 1.00],
                ap_range: [0.4, 1.2],
                kc: 2300,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "HC-M35 (PVD)",
                geometry: "SPMT 090408-DG (Para Inox)",
                coating: "PVD AlTiN + CrN (Especialmente lubrificada para evitar travamento)",
                vc_range: [60, 110],
                feed_range: [0.10, 0.20],
                ap_range: [60, 60],
                kc: 2200,
                holders: {
                    "BT30": "Mandril Weldon BT30-SLA20-060",
                    "BT40": "Mandril Weldon BT40-SLA20-070",
                    "BT50": "Mandril Weldon BT50-SLA20-080",
                    "HSK63": "Mandril Weldon HSK63A-SLA20-075",
                    "HSK100": "Mandril Weldon HSK100A-SLA20-090"
                }
            },
            "alargamento": {
                grade: "Substrato HM",
                geometry: "Alargador Helicoidal D12 H7",
                coating: "PVD AlCrN (Superfície lapidada para escoamento rápido)",
                vc_range: [10, 20],
                feed_range: [0.12, 0.30],
                ap_range: [0.1, 0.25],
                kc: 2400,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    },
    "K": { // Ferro Fundido
        "torneamento": {
            "acabamento": {
                grade: "HC-K10 (CVD)",
                geometry: "CNMG 120404-KF",
                coating: "CVD Espessa Al₂O₃ + TiN (Excepcional contra desgaste abrasivo de silício)",
                vc_range: [200, 300],
                feed_range: [0.10, 0.25],
                ap_range: [0.3, 1.5],
                kc: 1100,
                holders: {
                    "20x20": "DCLNR 2020K12",
                    "25x25": "DCLNR 2525M12",
                    "32x32": "DCLNR 3232P12",
                    "d20": "A20S-SDQCR11 (Interno)",
                    "d25": "A25T-SDQCR11 (Interno)",
                    "d32": "A32U-SDQCR11 (Interno)"
                }
            },
            "medio": {
                grade: "HC-K15 (CVD)",
                geometry: "CNMG 120408-KM",
                coating: "CVD MTCVD Al₂O₃ + TiN (Estabilidade dimensional longa)",
                vc_range: [180, 260],
                feed_range: [0.20, 0.40],
                ap_range: [1.2, 4.5],
                kc: 1200,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "HC-K25 (CVD)",
                geometry: "SNMG 120412-KR",
                coating: "CVD TiN + Al₂O₃ grossa (Alta proteção contra impactos e cascas de areia)",
                vc_range: [120, 180],
                feed_range: [0.25, 0.50],
                ap_range: [3.0, 7.0],
                kc: 1300,
                holders: {
                    "20x20": "PSSNL 2020K12",
                    "25x25": "PSSNL 2525M12",
                    "32x32": "PSSNL 3232P12",
                    "d20": "A20S-PDUNR11 (Interno)",
                    "d25": "A25T-PDUNR11 (Interno)",
                    "d32": "A32U-PDUNR15 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "HC-K15 (CVD)",
                geometry: "ONMU 080608-KF (Octogonal 16 arestas)",
                coating: "CVD Ti(C,N) + Al₂O₃ (Máxima economia por aresta)",
                vc_range: [160, 240],
                feed_range: [0.15, 0.35],
                ap_range: [1.0, 4.5],
                kc: 1100,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA25.4-045",
                    "BT40": "Porta-Fresa BT40-FMA25.4-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA25.4-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            },
            "cavidades": {
                grade: "HC-K20 (PVD)",
                geometry: "APKT 1604PDER-K",
                coating: "PVD TiAlN (Excelente para canais em nodular sem estourar cantos)",
                vc_range: [140, 200],
                feed_range: [0.12, 0.22],
                ap_range: [1.0, 4.0],
                kc: 1200,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER25-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "HC-K25 (PVD)",
                geometry: "SDMT 120412-KF",
                coating: "PVD AlCrN (Resistência mecânica para alto esforço)",
                vc_range: [130, 180],
                feed_range: [0.60, 1.10],
                ap_range: [0.5, 1.4],
                kc: 1250,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "HC-K20 (PVD)",
                geometry: "Broca Integral HM de 140º Autocentrante",
                coating: "PVD TiAlN (Excelente dureza a quente no fundido nodular/cinzento)",
                vc_range: [90, 150],
                feed_range: [0.18, 0.35],
                ap_range: [60, 60],
                kc: 1200,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC20-075",
                    "BT40": "Mandril Hidráulico BT40-HC20-090",
                    "BT50": "Mandril Hidráulico BT50-HC20-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC20-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC20-090"
                }
            },
            "alargamento": {
                grade: "Substrato HM",
                geometry: "Alargador Reto D12",
                coating: "Sem Cobertura (Polido de Precisão)",
                vc_range: [20, 35],
                feed_range: [0.20, 0.50],
                ap_range: [0.15, 0.35],
                kc: 1300,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    },
    "N": { // Alumínio e Não-Ferrosos
        "torneamento": {
            "acabamento": {
                grade: "H10 (Metal Duro Polido)",
                geometry: "CCGT 120404-AL (Monoface Polido)",
                coating: "Sem Cobertura (Lapidação espelhada para evitar adesão química)",
                vc_range: [500, 1000],
                feed_range: [0.08, 0.20],
                ap_range: [0.1, 1.5],
                kc: 650,
                holders: {
                    "20x20": "SCLCR 2020K12 (Positivo)",
                    "25x25": "SCLCR 2525M12 (Positivo)",
                    "32x32": "SCLCR 3232P12 (Positivo)",
                    "d20": "A20S-SCLCR09 (Interno)",
                    "d25": "A25T-SCLCR09 (Interno)",
                    "d32": "A32U-SCLCR12 (Interno)"
                }
            },
            "medio": {
                grade: "H15 (Metal Duro)",
                geometry: "CNGG 120408-AL",
                coating: "Sem Cobertura (Aresta de corte extremamente afiada 12º+)",
                vc_range: [400, 800],
                feed_range: [0.15, 0.35],
                ap_range: [1.0, 4.0],
                kc: 700,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "HC-N20 (DLC)",
                geometry: "CNGG 120412-AL",
                coating: "Revestimento DLC (Diamond-Like Carbon) de alta dureza superficial",
                vc_range: [300, 600],
                feed_range: [0.20, 0.45],
                ap_range: [2.5, 5.0],
                kc: 750,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "H10 (Sem Cobertura)",
                geometry: "SEHT 1204AFFN-AL",
                coating: "Sem Cobertura (Polimento de face superior para expulsão rápida)",
                vc_range: [400, 900],
                feed_range: [0.12, 0.28],
                ap_range: [1.0, 5.0],
                kc: 650,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            },
            "cavidades": {
                grade: "DLC-N10 (PVD)",
                geometry: "Fresa Integral de 3 dentes hélice 45º",
                coating: "Revestimento DLC (Resiste ao desgaste por atrito em cavidades profundas)",
                vc_range: [300, 700],
                feed_range: [0.06, 0.18],
                ap_range: [1.0, 8.0],
                kc: 700,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER32-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "H10 (Sem Cobertura)",
                geometry: "APKT 1604PDER-AL",
                coating: "Sem Cobertura (Geometria super positiva de aresta afiada)",
                vc_range: [350, 750],
                feed_range: [0.30, 0.60],
                ap_range: [0.5, 1.6],
                kc: 680,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER25-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "H10 (Integral)",
                geometry: "Broca Integral Helicoidal Polida com canais de escoamento largos",
                coating: "Sem Cobertura (Polimento fino em canais helicoidais)",
                vc_range: [120, 250],
                feed_range: [0.18, 0.40],
                ap_range: [60, 60],
                kc: 700,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC20-075",
                    "BT40": "Mandril Hidráulico BT40-HC20-090",
                    "BT50": "Mandril Hidráulico BT50-HC20-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC20-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC20-090"
                }
            },
            "alargamento": {
                grade: "Substrato HM",
                geometry: "Alargador Polido de canais helicoidais à esquerda D12",
                coating: "Sem Cobertura",
                vc_range: [30, 60],
                feed_range: [0.25, 0.60],
                ap_range: [0.15, 0.30],
                kc: 750,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    },
    "S": { // Superligas e Titânio
        "torneamento": {
            "acabamento": {
                grade: "HC-S15 (PVD)",
                geometry: "CNMG 120404-SF",
                coating: "PVD AlTiN Fino (Resistência química para evitar desgaste entalhe)",
                vc_range: [45, 80],
                feed_range: [0.05, 0.15],
                ap_range: [0.2, 1.0],
                kc: 2600,
                holders: {
                    "20x20": "DCLNR 2020K12",
                    "25x25": "DCLNR 2525M12",
                    "32x32": "DCLNR 3232P12",
                    "d20": "A20S-SDQCR11 (Interno)",
                    "d25": "A25T-SDQCR11 (Interno)",
                    "d32": "A32U-SDQCR11 (Interno)"
                }
            },
            "medio": {
                grade: "HC-S20 (PVD)",
                geometry: "CNMG 120408-SM",
                coating: "PVD AlTiN + TiN Nano (Excelente rigidez térmica de aresta viva)",
                vc_range: [35, 65],
                feed_range: [0.10, 0.22],
                ap_range: [0.8, 2.5],
                kc: 2800,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "Cerâmica SiAlON / HC-S25 (Carbide)",
                geometry: "RNGN 120700-E (Pastilha Redonda Cerâmica)",
                coating: "Sem cobertura (Cerâmica) ou PVD S25 (Tenaz para baixo Vc)",
                vc_range: [150, 250],
                feed_range: [0.12, 0.25],
                ap_range: [1.5, 4.0],
                kc: 2900,
                holders: {
                    "20x20": "SRDCN 2020K12",
                    "25x25": "SRDCN 2525M12",
                    "32x32": "SRDCN 3232P12",
                    "d20": "A20S-SRDCR10 (Interno)",
                    "d25": "A25T-SRDCR12 (Interno)",
                    "d32": "A32U-SRDCR12 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "HC-S20 (PVD)",
                geometry: "RPMT 1204M0-S (Pastilha Redonda Positiva)",
                coating: "PVD AlCrN + AlTiN (Dissipação térmica extrema e antioxidação)",
                vc_range: [30, 60],
                feed_range: [0.06, 0.15],
                ap_range: [0.5, 2.5],
                kc: 2700,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMR12-040",
                    "BT40": "Porta-Fresa BT40-FMR12-050",
                    "BT50": "Porta-Fresa BT50-FMR12-065",
                    "HSK63": "Porta-Fresa HSK63A-FMR12-050",
                    "HSK100": "Porta-Fresa HSK100A-FMR12-065"
                }
            },
            "cavidades": {
                grade: "HC-S25 (PVD)",
                geometry: "APKT 1003PDER-S",
                coating: "PVD AlTiN Fina (Minimiza esforço mecânico na parede lateral)",
                vc_range: [25, 55],
                feed_range: [0.05, 0.12],
                ap_range: [0.5, 3.0],
                kc: 2800,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER25-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "HC-S20 (PVD)",
                geometry: "SDMT 09T308-HF",
                coating: "PVD AlTiN + CrN (Prevenção de desgaste por fricção contínua)",
                vc_range: [30, 50],
                feed_range: [0.40, 0.80],
                ap_range: [0.3, 0.8],
                kc: 2900,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "HC-S25 (PVD)",
                geometry: "Broca Integral Helicoidal com canais de óleo",
                coating: "PVD AlTiN Fina (Evita formação de calor entranhado no furo)",
                vc_range: [25, 50],
                feed_range: [0.06, 0.14],
                ap_range: [60, 60],
                kc: 2850,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC20-075",
                    "BT40": "Mandril Hidráulico BT40-HC20-090",
                    "BT50": "Mandril Hidráulico BT50-HC20-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC20-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC20-090"
                }
            },
            "alargamento": {
                grade: "Substrato HM",
                geometry: "Alargador Helicoidal D12 Refrigeração Interna",
                coating: "PVD AlTiN de Alta Dureza Térmica",
                vc_range: [8, 15],
                feed_range: [0.08, 0.20],
                ap_range: [0.08, 0.20],
                kc: 3000,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    },
    "H": { // Materiais Endurecidos > 45 HRC
        "torneamento": {
            "acabamento": {
                grade: "CBN (Nitreto de Boro Cúbico - Classe HC-H05)",
                geometry: "CNGA 120404 S01020 (Ponta de CBN com chanfro K-Land)",
                coating: "Sem Cobertura ou PVD TiAlN Nano (Para monitoramento visual do desgaste)",
                vc_range: [120, 200],
                feed_range: [0.05, 0.15],
                ap_range: [0.05, 0.3],
                kc: 3200,
                holders: {
                    "20x20": "MCLNR 2020K12 (Assento CBN especial)",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "medio": {
                grade: "CBN Reforçado (Nitreto de Boro Cúbico)",
                geometry: "CNGA 120408 S02020 (Aresta reforçada para leve interrupção)",
                coating: "PVD AlCrSiN de Alta Resistência a Micro-impactos",
                vc_range: [90, 160],
                feed_range: [0.08, 0.18],
                ap_range: [0.1, 0.5],
                kc: 3500,
                holders: {
                    "20x20": "MCLNR 2020K12",
                    "25x25": "MCLNR 2525M12",
                    "32x32": "MCLNR 3232P16",
                    "d20": "A20S-MCLNR12 (Interno)",
                    "d25": "A25T-MCLNR12 (Interno)",
                    "d32": "A32U-MCLNR12 (Interno)"
                }
            },
            "desbaste": {
                grade: "Cerâmica Mista (Al₂O₃ + TiC) / CBN Tenaz",
                geometry: "RNGN 120400 T02020 (Pastilha Redonda)",
                coating: "Sem Cobertura (Cerâmica Mista)",
                vc_range: [60, 120],
                feed_range: [0.10, 0.20],
                ap_range: [0.5, 2.0],
                kc: 3800,
                holders: {
                    "20x20": "SRDCN 2020K12",
                    "25x25": "SRDCN 2525M12",
                    "32x32": "SRDCN 3232P12",
                    "d20": "A20S-SRDCR10 (Interno)",
                    "d25": "A25T-SRDCR12 (Interno)",
                    "d32": "A32U-SRDCR12 (Interno)"
                }
            }
        },
        "fresamento": {
            "faceamento": {
                grade: "CBN Integral / HC-H10 (Carbide Duro)",
                geometry: "Cabeçote de pastilhas quadradas chanfradas",
                coating: "PVD AlCrSiN (Resistência térmica contra calor de cisalhamento)",
                vc_range: [80, 160],
                feed_range: [0.05, 0.12],
                ap_range: [0.2, 1.0],
                kc: 3300,
                holders: {
                    "BT30": "Porta-Fresa BT30-FMA22-045",
                    "BT40": "Porta-Fresa BT40-FMA22-060",
                    "BT50": "Porta-Fresa BT50-FMA31.75-075",
                    "HSK63": "Porta-Fresa HSK63A-FMA22-075",
                    "HSK100": "Porta-Fresa HSK100A-FMA31.75-080"
                }
            },
            "cavidades": {
                grade: "HC-H10 (Carbide Extra Grão)",
                geometry: "Fresa Esférica de 4 a 6 dentes reforçada",
                coating: "PVD Silicon-TiAlN (Dureza nanométrica superior a 40 GPa)",
                vc_range: [60, 140],
                feed_range: [0.03, 0.08],
                ap_range: [0.1, 0.8],
                kc: 3500,
                holders: {
                    "BT30": "Porta-Fresa BT30-ER20-060",
                    "BT40": "Porta-Fresa BT40-ER32-070",
                    "BT50": "Porta-Fresa BT50-ER40-080",
                    "HSK63": "Porta-Fresa HSK63A-ER32-075",
                    "HSK100": "Porta-Fresa HSK100A-ER40-090"
                }
            },
            "alto-avanco": {
                grade: "HC-H15 (Tenaz Duro)",
                geometry: "Fresa Modular Rosqueada D20",
                coating: "PVD AlTiN de alta resistência térmica",
                vc_range: [50, 110],
                feed_range: [0.25, 0.50],
                ap_range: [0.15, 0.40],
                kc: 3600,
                holders: {
                    "BT30": "Haste Roscada Modular BT30-M10-075",
                    "BT40": "Haste Roscada Modular BT40-M10-090",
                    "BT50": "Haste Roscada Modular BT50-M10-100",
                    "HSK63": "Haste Roscada Modular HSK63A-M10-085",
                    "HSK100": "Haste Roscada Modular HSK100A-M10-090"
                }
            }
        },
        "furacao": {
            "plena": {
                grade: "HC-H15 (Carbide Tenaz)",
                geometry: "Broca Integral Helicoidal com ponta reforçada de 145º",
                coating: "PVD AlTiN Nano-Cristalina",
                vc_range: [30, 65],
                feed_range: [0.05, 0.12],
                ap_range: [60, 60],
                kc: 3500,
                holders: {
                    "BT30": "Mandril de Alto Aperto BT30-SLA16",
                    "BT40": "Mandril de Alto Aperto BT40-SLA16",
                    "BT50": "Mandril de Alto Aperto BT50-SLA16",
                    "HSK63": "Mandril de Alto Aperto HSK63A-SLA16",
                    "HSK100": "Mandril de Alto Aperto HSK100A-SLA16"
                }
            },
            "alargamento": {
                grade: "CBN Integral / HM Extra Duro",
                geometry: "Alargador CBN Reto de Alta Precisão D12",
                coating: "PVD AlCrSiN",
                vc_range: [12, 22],
                feed_range: [0.06, 0.15],
                ap_range: [0.05, 0.15],
                kc: 3700,
                holders: {
                    "BT30": "Mandril Hidráulico BT30-HC12-075",
                    "BT40": "Mandril Hidráulico BT40-HC12-090",
                    "BT50": "Mandril Hidráulico BT50-HC12-100",
                    "HSK63": "Mandril Hidráulico HSK63A-HC12-085",
                    "HSK100": "Mandril Hidráulico HSK100A-HC12-090"
                }
            }
        }
    }
};

// Banco de Dados de Desgastes para Troubleshooting (com SVGs Inline)
const WEAR_DATABASE = [
    {
        id: "flank-wear",
        name: "Desgaste de Flanco (VB)",
        type: "normal",
        typeName: "Desgaste Normal / Abrasivo",
        shortDesc: "Abrasão na lateral da aresta. É o tipo de desgaste desejável se ocorrer de forma gradual.",
        desc: "Trata-se do desgaste abrasivo mecânico na superfície de flanco da pastilha. É causado pelo atrito direto com o material da peça. O objetivo no chão de fábrica é garantir que a pastilha atinja o fim de sua vida útil por este desgaste, de forma previsível e sem quebras repentinas.",
        causes: [
            "Velocidade de corte (Vc) excessiva.",
            "Material da peça altamente abrasivo (ex: alto teor de silício ou ligas tratadas).",
            "Classe de metal duro muito macia (com pouca resistência ao desgaste).",
            "Avanço (fn) muito baixo, gerando mais atrito do que corte efetivo."
        ],
        solutions: [
            "Reduzir a velocidade de corte (Vc) em 10% a 20%.",
            "Selecionar uma classe de metal duro mais dura e resistente ao desgaste (ex: mudar de P35 para P25 ou P15).",
            "Aumentar a taxa de avanço (fn) para sair da zona de atrito constante.",
            "Garantir refrigeração abundante direcionada na zona de corte."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <!-- Inserto básico (Pastilha CNMG) -->
            <polygon points="50,150 150,150 170,80 70,80" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <polygon points="50,150 70,80 70,10" fill="#1a202c" opacity="0.3"/>
            <!-- Aresta de corte superior direita -->
            <!-- Desgaste de Flanco representado em laranja brilhante na lateral -->
            <path d="M 150,150 L 170,80 L 164,88 L 148,150 Z" fill="#f97316" filter="drop-shadow(0 0 3px rgba(249,115,22,0.6))"/>
            <!-- Detalhe da peça passando -->
            <path d="M 140,170 L 190,75" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="2"/>
        </svg>`
    },
    {
        id: "crater-wear",
        name: "Desgaste de Cratera (KT)",
        type: "critical",
        typeName: "Crítico / Térmico-Químico",
        shortDesc: "Cavidade na face superior da pastilha causada pela alta temperatura e difusão química.",
        desc: "O desgaste de cratera ocorre na superfície de saída da pastilha, onde o cavaco desliza sob alta pressão e temperaturas extremas. A essa temperatura, átomos de tungstênio do metal duro se fundem/difundem no cavaco de aço, enfraquecendo a aresta até que ela colapse.",
        causes: [
            "Velocidade de corte (Vc) extremamente alta para o material.",
            "Avanço (fn) muito elevado com grande profundidade de corte (ap), gerando calor excessivo.",
            "Falta de cobertura protetora de Alumina (Al₂O₃) espessa na pastilha.",
            "Material da peça com alta afinidade química com o cobalto/carboneto."
        ],
        solutions: [
            "Reduzir a velocidade de corte (Vc).",
            "Usar classes com cobertura CVD espessa (especialmente óxido de alumínio - Al₂O₃) que agem como barreira térmica.",
            "Reduzir o avanço (fn) ou profundidade de corte (ap).",
            "Utilizar refrigeração de alta pressão (Jetstream) direcionada na face de saída."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <polygon points="50,150 150,150 170,80 70,80" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Cratera representada por uma elipse de gradiente de calor na face de saída -->
            <ellipse cx="120" cy="110" rx="25" ry="10" transform="rotate(-15, 120, 110)" fill="rgba(244,63,94,0.4)" stroke="#f43f5e" stroke-width="1.5"/>
            <ellipse cx="120" cy="110" rx="15" ry="5" transform="rotate(-15, 120, 110)" fill="#f43f5e" opacity="0.8"/>
        </svg>`
    },
    {
        id: "chipping",
        name: "Lascamento da Aresta",
        type: "critical",
        typeName: "Crítico / Choque Mecânico",
        shortDesc: "Pequenos pedaços da aresta de corte se soltam devido a vibrações ou instabilidade.",
        desc: "O lascamento ocorre quando pequenas partículas do metal duro se desprendem da aresta de corte. É uma falha mecânica causada por micro-impactos, vibrações severas ou endurecimento excessivo do material durante o corte.",
        causes: [
            "Instabilidade mecânica (vibração da peça ou da ferramenta).",
            "Usinagem de materiais com cascas duras ou inclusões de areia.",
            "Corte interrompido severo com classe excessivamente dura/frágil.",
            "Avanço muito alto ou quebra-cavaco inadequado."
        ],
        solutions: [
            "Melhorar a rigidez do setup (reduzir balanço da ferramenta, apertar fixação).",
            "Substituir a classe por uma mais tenaz (ex: mudar de P15 para P25 ou P35).",
            "Utilizar uma pastilha com raio de canto maior ou geometria com aresta reforçada.",
            "Reduzir o avanço (fn) no momento de entrada no material."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <!-- Inserto com cantos lascados -->
            <path d="M 50,150 L 145,150 L 148,140 L 152,143 L 155,130 L 151,128 L 158,110 L 170,80 L 70,80 Z" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Destaque do lascado em vermelho de impacto -->
            <path d="M 145,150 L 148,140 L 152,143 L 155,130 L 151,128 L 158,110 L 163,115 L 154,133 L 150,148 Z" fill="#f43f5e" opacity="0.9" />
        </svg>`
    },
    {
        id: "built-up-edge",
        name: "Aresta Postiça de Corte (APC)",
        type: "critical",
        typeName: "Crítico / Adesão",
        shortDesc: "Material da peça se funde e solda na aresta de corte devido a baixas temperaturas.",
        desc: "A Aresta Postiça ocorre principalmente em materiais dúcteis e pegajosos (como Alumínio, Inox e Aços de baixo carbono). Quando a temperatura na zona de corte é baixa, o material da peça se deforma e solda quimicamente na aresta de corte. Conforme o corte continua, essa 'falsa aresta' se desprende, levando pedaços de metal duro junto.",
        causes: [
            "Velocidade de corte (Vc) muito baixa, reduzindo a temperatura necessária para amolecer o cavaco.",
            "Geometria da pastilha muito negativa ou aresta arredondada demais (gera muito esmagamento).",
            "Falta de lubrificação eficiente para reduzir o atrito.",
            "Pastilha sem cobertura adequada ou sem polimento na face de saída."
        ],
        solutions: [
            "Aumentar significativamente a velocidade de corte (Vc) para elevar a temperatura e liquefazer a interface.",
            "Usar pastilhas com geometrias muito positivas, afiadas e polidas (especialmente para alumínio - AL).",
            "Aplicar fluido de corte/refrigeração abundante e bem direcionado.",
            "Selecionar pastilhas com coberturas PVD de baixo atrito (ex: coberturas TiAlN ou DLC)."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <polygon points="50,150 150,150 170,80 70,80" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Material soldado na ponta representado por uma masa de cor prata/azulada brilhante -->
            <path d="M 150,150 C 155,155 168,150 172,130 C 176,110 174,85 170,80 C 168,85 164,100 158,115 C 152,130 148,145 150,150 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" filter="drop-shadow(0 0 4px rgba(255,255,255,0.5))"/>
        </svg>`
    },
    {
        id: "thermal-cracking",
        name: "Trincas Térmicas (Fadiga)",
        type: "critical",
        typeName: "Crítico / Fadiga Térmica",
        shortDesc: "Trincas perpendiculares à aresta causadas por ciclos rápidos de aquecimento e resfriamento.",
        desc: "As trincas térmicas ocorrem quando a aresta de corte é submetida a variações bruscas e repetitivas de temperatura. É extremamente comum em fresamento (onde o dente corta e sai do corte repetidamente) ou em torneamento com refrigeração intermitente (o refrigerante bate e para de bater na pastilha).",
        causes: [
            "Refrigeração intermitente ou inadequada (efeito liga-desliga).",
            "Usinagem em corte interrompido rápido (fresamento) sob altas velocidades.",
            "Classe de metal duro com baixo coeficiente de condutividade térmica."
        ],
        solutions: [
            "Usinar totalmente a seco (Dry Machining) - o metal duro suporta alta temperatura se ela for estável.",
            "Se refrigerar for obrigatório, garantir vazão e pressão constantes para evitar qualquer choque térmico.",
            "Usar classes com cobertura PVD tenaz, que resistem muito melhor ao choque térmico do que classes CVD grossas.",
            "Reduzir a velocidade de corte (Vc)."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <polygon points="50,150 150,150 170,80 70,80" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Linhas finas pretas e vermelhas perpendiculares à aresta simbolizando trincas térmicas -->
            <line x1="160" y1="115" x2="148" y2="118" stroke="#ef4444" stroke-width="2"/>
            <line x1="163" y1="105" x2="152" y2="108" stroke="#000" stroke-width="2"/>
            <line x1="156" y1="130" x2="145" y2="133" stroke="#ef4444" stroke-width="2"/>
            <line x1="166" y1="95" x2="155" y2="98" stroke="#000" stroke-width="2"/>
        </svg>`
    },
    {
        id: "plastic-deformation",
        name: "Deformação Plástica",
        type: "critical",
        typeName: "Crítico / Temperatura Extrema",
        shortDesc: "A ponta da pastilha amolece sob calor extremo e deforma-se sob a pressão de corte.",
        desc: "A deformação plástica ocorre quando a temperatura da aresta atinge o ponto de amolecimento do ligante (cobalto). Sob a enorme força de usinagem, a ponta da ferramenta é amassada ou rebaixada, alterando a geometria de corte, gerando atrito severo e rápida quebra subsequente.",
        causes: [
            "Calor excessivo gerado por velocidades de corte (Vc) e avanços (fn) elevados.",
            "Material da peça de difícil usinabilidade e alta dureza (ex: aços temperados ou superligas).",
            "Classe de metal duro com baixo teor de cobalto ou sem reforço de carbonetos cúbicos a quente."
        ],
        solutions: [
            "Reduzir a velocidade de corte (Vc) e/ou avanço (fn).",
            "Selecionar uma classe de metal duro mais resistente ao calor, com substrato duro ou classe reforçada para deformação plástica.",
            "Melhorar a aplicação de refrigerante para resfriar a aresta.",
            "Reduzir a profundidade de corte (ap) para diminuir o esforço total."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <!-- Inserto com a ponta/aresta amassada ou curvada para baixo -->
            <path d="M 50,150 L 140,150 Q 155,148 160,135 Q 165,115 168,80 L 70,80 Z" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Destaque do rebaixo da ponta em laranja metálico -->
            <path d="M 140,150 Q 155,148 160,135 Q 165,115 168,80 L 170,80 Q 168,110 162,130 Q 150,147 140,150 Z" fill="#ea580c" opacity="0.8"/>
        </svg>`
    },
    {
        id: "breakage",
        name: "Quebra da Ferramenta",
        type: "critical",
        typeName: "Crítico / Catastrófico",
        shortDesc: "Fratura completa e catastrófica do inserto de metal duro.",
        desc: "A quebra é a falha mais severa, pois pode danificar o suporte da ferramenta e até mesmo a peça que está sendo usinada. Geralmente ocorre após a negligência de outros tipos de desgaste primário (como lascamento ou deformação plástica) ou por sobrecarga brusca de força.",
        causes: [
            "Sobrecarga mecânica devido a avanço (fn) ou profundidade de corte (ap) excessivos.",
            "Empacotamento de cavacos na zona de corte (muito comum em furação e canais).",
            "Uso prolongado de pastilha gasta além do limite recomendado de desgaste de flanco (VB > 0.4mm).",
            "Entrada abrupta no material ou impactos severos."
        ],
        solutions: [
            "Reduzir o avanço (fn) ou a profundidade de corte (ap).",
            "Trocar a pastilha de forma preventiva antes de atingir o desgaste limite.",
            "Selecionar um quebra-cavaco mais robusto ou aumentar a vazão de refrigeração para expelir os cavacos.",
            "Selecionar uma classe substancialmente mais tenaz (ex: mudar para classe P40 ou classe revestida PVD reforçada)."
        ],
        svg: `<svg viewBox="0 0 200 200">
            <!-- Inserto cortado/quebrado (sem um grande pedaço da ponta) -->
            <path d="M 50,150 L 120,150 L 130,130 L 125,110 L 135,95 L 70,80 Z" fill="#2d3748" stroke="#cbd5e1" stroke-width="3" />
            <!-- Linhas de fratura em zigue-zague vermelhas -->
            <path d="M 120,150 L 130,130 L 125,110 L 135,95 L 170,80 L 150,150 Z" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="2,2"/>
        </svg>`
    }
];


// --- INICIALIZAÇÃO DA APLICAÇÃO ---

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar Ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Gerenciar Abas Principais
    initTabs();

    // Gerenciar Lógica de Dados de Corte
    initDadosCorte();

    // Gerenciar Lógica do Estudo de Custos (TCO)
    initTcoCustos();

    // Gerenciar Wizard do Seletor ISO (Seleção de Ferramentas)
    initIsoWizard();

    // Gerenciar Galeria de Solução de Problemas
    initTroubleshooting();
});


// --- MÓDULO: NAVEGAÇÃO DE ABAS ---

function initTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");

            // Remover classe ativa
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Adicionar ativa no alvo
            tab.classList.add("active");
            const targetEl = document.getElementById(target);
            if (targetEl) {
                targetEl.classList.add("active");
            }
        });
    });
}


// --- MÓDULO: DADOS DE CORTE ---

let currentOperation = "torneamento"; // torneamento, fresamento, furacao

function initDadosCorte() {
    const opButtons = document.querySelectorAll(".op-btn");
    const materialSelect = document.getElementById("material-select");
    const kcInput = document.getElementById("input-kc");
    const vcInput = document.getElementById("input-vc");

    // Mudança de Operação (Torneamento, Fresamento, Furação)
    opButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            opButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentOperation = btn.getAttribute("data-op");
            renderDynamicInputs();
            updateCalculations();
        });
    });

    // Mudança de Material (ISO) -> Atualizar Kc e Vc padrão
    if (materialSelect) {
        materialSelect.addEventListener("change", () => {
            const selectedOption = materialSelect.options[materialSelect.selectedIndex];
            const defaultKc = selectedOption.getAttribute("data-kc");
            const defaultVc = selectedOption.getAttribute("data-vc");

            if (kcInput) kcInput.value = defaultKc;
            if (vcInput) vcInput.value = defaultVc;

            // Atualizar input-vc se ele existir no DOM dinâmico
            const vcDynamic = document.getElementById("input-vc");
            if (vcDynamic) {
                vcDynamic.value = defaultVc;
            }

            updateCalculations();
        });
    }

    // Renderizar inputs iniciais (torneamento por padrão)
    renderDynamicInputs();
    updateCalculations();
}

// Renderizar dinamicamente os formulários dependendo da operação
function renderDynamicInputs() {
    const container = document.getElementById("dynamic-inputs");
    if (!container) return;

    const materialSelect = document.getElementById("material-select");
    const defaultVc = materialSelect ? materialSelect.options[materialSelect.selectedIndex].getAttribute("data-vc") : 220;
    const roughnessCard = document.getElementById("roughness-card");

    if (currentOperation === "torneamento") {
        if (roughnessCard) roughnessCard.style.display = "flex";
        container.innerHTML = `
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-diameter">Diâmetro da Peça (D<sub>m</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-diameter" value="80" min="0.1" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-vc">Velocidade de Corte (V<sub>c</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-vc" value="${defaultVc}" min="1" step="any">
                        <span class="unit">m/min</span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-ap">Prof. de Corte (a<sub>p</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-ap" value="2.0" min="0.05" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-feed">Avanço por Volta (f<sub>n</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-feed" value="0.25" min="0.01" step="any">
                        <span class="unit">mm/v</span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-group">
                    <label for="input-radius">Raio do Inserto (r<sub>ε</sub>)</label>
                    <select id="input-radius">
                        <option value="0.2">0.2 mm</option>
                        <option value="0.4">0.4 mm</option>
                        <option value="0.8" selected>0.8 mm</option>
                        <option value="1.2">1.2 mm</option>
                        <option value="1.6">1.6 mm</option>
                    </select>
                </div>
            </div>
        `;
    } else if (currentOperation === "fresamento") {
        if (roughnessCard) roughnessCard.style.display = "none";
        container.innerHTML = `
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-diameter">Diâmetro da Fresa (D<sub>c</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-diameter" value="50" min="0.1" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-z">Nº de Dentes (z)</label>
                    <input type="number" id="input-z" value="4" min="1">
                </div>
            </div>
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-vc">Velocidade de Corte (V<sub>c</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-vc" value="${defaultVc}" min="1" step="any">
                        <span class="unit">m/min</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-fz">Avanço por Dente (f<sub>z</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-fz" value="0.12" min="0.005" step="any">
                        <span class="unit">mm/dente</span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-ap">Prof. Axial (a<sub>p</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-ap" value="3.0" min="0.05" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-ae">Prof. Radial (a<sub>e</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-ae" value="35" min="0.05" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
            </div>
        `;
    } else if (currentOperation === "furacao") {
        if (roughnessCard) roughnessCard.style.display = "none";
        container.innerHTML = `
            <div class="form-row">
                <div class="input-group half">
                    <label for="input-diameter">Diâmetro da Broca (D<sub>c</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-diameter" value="18" min="0.1" step="any">
                        <span class="unit">mm</span>
                    </div>
                </div>
                <div class="input-group half">
                    <label for="input-vc">Velocidade de Corte (V<sub>c</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-vc" value="${defaultVc}" min="1" step="any">
                        <span class="unit">m/min</span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-group">
                    <label for="input-feed">Avanço por Volta (f<sub>n</sub>)</label>
                    <div class="input-with-unit">
                        <input type="number" id="input-feed" value="0.15" min="0.01" step="any">
                        <span class="unit">mm/v</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Vincular listeners de input para calcular instantaneamente
    const inputs = container.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.addEventListener("input", updateCalculations);
        input.addEventListener("change", updateCalculations);
    });

    // Vincular outros inputs estáticos que afetam cálculos
    const kcInput = document.getElementById("input-kc");
    const etaInput = document.getElementById("input-eta");
    if (kcInput) kcInput.addEventListener("input", updateCalculations);
    if (etaInput) etaInput.addEventListener("input", updateCalculations);
}

// Motor de Cálculo Principal
function updateCalculations() {
    const kcInput = document.getElementById("input-kc");
    const etaInput = document.getElementById("input-eta");
    const kc = kcInput ? (parseFloat(kcInput.value) || 1900) : 1900;
    const eta = etaInput ? (parseFloat(etaInput.value) || 0.85) : 0.85;

    // Elementos de Output
    const resN = document.getElementById("res-n");
    const resVf = document.getElementById("res-vf");
    const resQ = document.getElementById("res-q");
    const resPc = document.getElementById("res-pc");
    const resMc = document.getElementById("res-mc");

    // Pegar inputs de forma segura dependendo do DOM renderizado
    const diameterInput = document.getElementById("input-diameter");
    const vcInput = document.getElementById("input-vc");

    if (!diameterInput || !vcInput || !resN) return;

    const diameter = parseFloat(diameterInput.value) || 10;
    const vc = parseFloat(vcInput.value) || 100;

    let n = 0;
    let vf = 0;
    let q = 0;
    let pc = 0;
    let mc = 0;

    // Cálculo da Rotação (n = Vc * 1000 / (pi * D)) - Comum a todos
    n = (vc * 1000) / (Math.PI * diameter);

    if (currentOperation === "torneamento") {
        const apInput = document.getElementById("input-ap");
        const feedInput = document.getElementById("input-feed");
        const radiusInput = document.getElementById("input-radius");

        const ap = apInput ? (parseFloat(apInput.value) || 1) : 1;
        const fn = feedInput ? (parseFloat(feedInput.value) || 0.1) : 0.1;
        const re = radiusInput ? (parseFloat(radiusInput.value) || 0.8) : 0.8;

        // Avanço de mesa (Vf = fn * n)
        vf = fn * n;

        // Taxa de Remoção de Metal (Q = Vc * ap * fn) (Q em cm3/min)
        q = vc * ap * fn;

        // Potência de Corte (Pc = ap * fn * Vc * Kc / (60 * 10^3 * eta))
        pc = (ap * fn * vc * kc) / (60000 * eta);

        // Torque (Mc = Pc * 9550 / n)
        mc = pc > 0 && n > 0 ? (pc * 9550) / n : 0;

        // Rugosidade Teórica (Rt = (fn^2 / (8 * re)) * 1000, Ra = Rt / 4)
        let rt = (Math.pow(fn, 2) / (8 * re)) * 1000;
        let ra = rt / 4;

        const raEl = document.getElementById("res-ra");
        const rtEl = document.getElementById("res-rt");
        if (raEl) raEl.innerText = ra.toFixed(2);
        if (rtEl) rtEl.innerText = rt.toFixed(2);

    } else if (currentOperation === "fresamento") {
        const zInput = document.getElementById("input-z");
        const fzInput = document.getElementById("input-fz");
        const apInput = document.getElementById("input-ap");
        const aeInput = document.getElementById("input-ae");

        const z = zInput ? (parseInt(zInput.value) || 1) : 1;
        const fz = fzInput ? (parseFloat(fzInput.value) || 0.1) : 0.1;
        const ap = apInput ? (parseFloat(apInput.value) || 1) : 1;
        const ae = aeInput ? (parseFloat(aeInput.value) || 1) : 1;

        // Avanço de mesa (Vf = fz * z * n)
        vf = fz * z * n;

        // Taxa de Remoção de Metal (Q = ap * ae * Vf / 1000)
        q = (ap * ae * vf) / 1000;

        // Potência de Corte (Pc = ap * ae * Vf * Kc / (60 * 10^6 * eta))
        pc = (ap * ae * vf * kc) / (60000000 * eta);

        // Torque
        mc = pc > 0 && n > 0 ? (pc * 9550) / n : 0;

    } else if (currentOperation === "furacao") {
        const feedInput = document.getElementById("input-feed");
        const fn = feedInput ? (parseFloat(feedInput.value) || 0.1) : 0.1;

        // Avanço de mesa (Vf = fn * n)
        vf = fn * n;

        // Taxa de Remoção de Metal (Q = pi * Dc^2 * Vf / 4000)
        q = (Math.PI * Math.pow(diameter, 2) * vf) / 4000;

        // Potência de Corte (Pc = Dc^2 * Vf * Kc / (240 * 10^3 * eta))
        pc = (Math.pow(diameter, 2) * vf * kc) / (240000 * eta);

        // Torque
        mc = pc > 0 && n > 0 ? (pc * 9550) / n : 0;
    }

    // Escrever os resultados arredondados no DOM
    if (resN) resN.innerText = Math.round(n);
    if (resVf) resVf.innerText = Math.round(vf);
    if (resQ) resQ.innerText = q.toFixed(1);
    if (resPc) resPc.innerText = pc.toFixed(2);
    if (resMc) resMc.innerText = mc.toFixed(1);
}


// --- MÓDULO: ESTUDO DE CUSTOS (TCO) ---

function initTcoCustos() {
    const tcoInputs = [
        "tco-mach-cost", "tco-annual-volume",
        "tco-curr-insert-price", "tco-curr-edges", "tco-curr-tool-life", "tco-curr-cycle-time", "tco-curr-holder-price", "tco-curr-holder-life",
        "tco-prop-insert-price", "tco-prop-edges", "tco-prop-tool-life", "tco-prop-cycle-time", "tco-prop-holder-price", "tco-prop-holder-life"
    ];

    tcoInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("input", calculateTCO);
        }
    });

    calculateTCO();
}

function calculateTCO() {
    const machCostEl = document.getElementById("tco-mach-cost");
    const annualVolumeEl = document.getElementById("tco-annual-volume");

    if (!machCostEl || !annualVolumeEl) return;

    // Inputs Gerais
    const machCost = parseFloat(machCostEl.value) || 150;
    const annualVolume = parseFloat(annualVolumeEl.value) || 10000;

    // Inputs Ferramenta Atual
    const currInsertPrice = parseFloat(document.getElementById("tco-curr-insert-price").value) || 0;
    const currEdges = parseFloat(document.getElementById("tco-curr-edges").value) || 1;
    const currToolLife = parseFloat(document.getElementById("tco-curr-tool-life").value) || 1;
    const currCycleTime = parseFloat(document.getElementById("tco-curr-cycle-time").value) || 1;
    const currHolderPrice = parseFloat(document.getElementById("tco-curr-holder-price").value) || 0;
    const currHolderLife = parseFloat(document.getElementById("tco-curr-holder-life").value) || 1;

    // Inputs Ferramenta Proposta
    const propInsertPrice = parseFloat(document.getElementById("tco-prop-insert-price").value) || 0;
    const propEdges = parseFloat(document.getElementById("tco-prop-edges").value) || 1;
    const propToolLife = parseFloat(document.getElementById("tco-prop-tool-life").value) || 1;
    const propCycleTime = parseFloat(document.getElementById("tco-prop-cycle-time").value) || 1;
    const propHolderPrice = parseFloat(document.getElementById("tco-prop-holder-price").value) || 0;
    const propHolderLife = parseFloat(document.getElementById("tco-prop-holder-life").value) || 1;

    // --- CÁLCULO PROCESSO ATUAL ---
    const currCostInsert = currInsertPrice / (currEdges * currToolLife);
    const currCostHolder = currHolderPrice / currHolderLife;
    const currCostMach = (currCycleTime / 3600) * machCost;
    const currTotalPart = currCostInsert + currCostHolder + currCostMach;
    const currTotalAnnual = currTotalPart * annualVolume;

    // --- CÁLCULO PROCESSO PROPOSTO ---
    const propCostInsert = propInsertPrice / (propEdges * propToolLife);
    const propCostHolder = propHolderPrice / propHolderLife;
    const propCostMach = (propCycleTime / 3600) * machCost;
    const propTotalPart = propCostInsert + propCostHolder + propCostMach;
    const propTotalAnnual = propTotalPart * annualVolume;

    // --- DIFERENÇAS E ECONOMIAS ---
    const diffInsert = currCostInsert - propCostInsert;
    const diffHolder = currCostHolder - propCostHolder;
    const diffMach = currCostMach - propCostMach;
    const diffPart = currTotalPart - propTotalPart;
    const diffAnnual = currTotalAnnual - propTotalAnnual;

    // Percentual de economia
    const savingsPercent = currTotalPart > 0 ? (diffPart / currTotalPart) * 100 : 0;

    // Tempo economizado em horas por ano
    const hoursSaved = ((currCycleTime - propCycleTime) * annualVolume) / 3600;

    // Aumento de Produtividade
    const prodIncrease = propCycleTime > 0 ? ((currCycleTime / propCycleTime) - 1) * 100 : 0;

    // --- RENDERIZAR RESULTADOS NO DOM ---
    const formattedSavings = diffAnnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    const savingsValEl = document.getElementById("tco-annual-savings");
    const savingsPctEl = document.getElementById("tco-savings-percent");
    const hoursSavedEl = document.getElementById("tco-hours-saved");
    const prodIncreaseEl = document.getElementById("tco-prod-increase");

    if (savingsValEl) savingsValEl.innerText = formattedSavings;
    if (savingsPctEl) savingsPctEl.innerText = `Redução de ${savingsPercent.toFixed(1)}% no custo total de usinagem`;
    if (hoursSavedEl) hoursSavedEl.innerText = Math.round(hoursSaved);
    if (prodIncreaseEl) prodIncreaseEl.innerText = prodIncrease.toFixed(1);

    // Glow Card styling based on saving positive or negative
    const glowCard = document.querySelector(".savings-glow-card");
    if (glowCard) {
        if (diffAnnual > 0) {
            glowCard.style.borderColor = "var(--success)";
            glowCard.style.background = "radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent 70%), var(--bg-dark-card)";
        } else {
            glowCard.style.borderColor = "var(--danger)";
            glowCard.style.background = "radial-gradient(circle at top right, rgba(244, 63, 94, 0.15), transparent 70%), var(--bg-dark-card)";
        }
    }

    // Detalhamento Tabela
    formatAndShow("tco-curr-cost-insert", currCostInsert);
    formatAndShow("tco-prop-cost-insert", propCostInsert);
    formatAndShowDiff("tco-diff-cost-insert", diffInsert);

    formatAndShow("tco-curr-cost-holder", currCostHolder);
    formatAndShow("tco-prop-cost-holder", propCostHolder);
    formatAndShowDiff("tco-diff-cost-holder", diffHolder);

    formatAndShow("tco-curr-cost-mach", currCostMach);
    formatAndShow("tco-prop-cost-mach", propCostMach);
    formatAndShowDiff("tco-diff-cost-mach", diffMach);

    formatAndShow("tco-curr-total-part", currTotalPart);
    formatAndShow("tco-prop-total-part", propTotalPart);
    
    // Custo anual total
    formatAndShow("tco-curr-total-annual", currTotalAnnual, true);
    formatAndShow("tco-prop-total-annual", propTotalAnnual, true);

    // Economia Total Peça / Anual
    const totalPartDiffEl = document.getElementById("tco-diff-total-part");
    const totalAnnualDiffEl = document.getElementById("tco-diff-total-annual");

    if (totalPartDiffEl) {
        totalPartDiffEl.innerText = diffPart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        totalPartDiffEl.style.color = diffPart >= 0 ? "var(--success)" : "var(--danger)";
    }

    if (totalAnnualDiffEl) {
        totalAnnualDiffEl.innerText = diffAnnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        totalAnnualDiffEl.style.color = diffAnnual >= 0 ? "var(--success)" : "var(--danger)";
    }

    // --- ATUALIZAR GRÁFICO DE BARRAS DE CUSTO ---
    const maxVal = Math.max(currTotalPart, propTotalPart) || 1;
    
    updateBar("bar-curr-insert", (currCostInsert / maxVal) * 100);
    updateBar("bar-curr-holder", (currCostHolder / maxVal) * 100);
    updateBar("bar-curr-machine", (currCostMach / maxVal) * 100);
    const currLabelEl = document.getElementById("bar-curr-label");
    if (currLabelEl) currLabelEl.innerText = `R$ ${currTotalPart.toFixed(2)}`;

    updateBar("bar-prop-insert", (propCostInsert / maxVal) * 100);
    updateBar("bar-prop-holder", (propCostHolder / maxVal) * 100);
    updateBar("bar-prop-machine", (propCostMach / maxVal) * 100);
    const propLabelEl = document.getElementById("bar-prop-label");
    if (propLabelEl) propLabelEl.innerText = `R$ ${propTotalPart.toFixed(2)}`;
}

function formatAndShow(id, value, isWhole = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (isWhole) {
        el.innerText = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
    } else {
        el.innerText = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 4 });
    }
}

function formatAndShowDiff(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const formatted = Math.abs(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 4 });
    
    if (value >= 0) {
        el.innerText = `R$ ${formatted}`;
        el.className = "diff-value";
        el.style.color = "var(--success)";
    } else {
        el.innerText = `-R$ ${formatted}`;
        el.className = "diff-value positive";
        el.style.color = "var(--danger)";
    }
}

function updateBar(id, percentage) {
    const el = document.getElementById(id);
    if (el) {
        el.style.width = percentage > 0 ? `${Math.max(percentage, 1)}%` : '0%';
    }
}


// --- MÓDULO: WIZARD DE SELEÇÃO DE FERRAMENTAS ---

let wizardState = {
    material: null,          // P, M, K, N, S, H
    mainOperation: "torneamento", // torneamento, fresamento, furacao
    subOperation: "acabamento",   // acabamento, medio, desbaste, faceamento, etc.
    machineType: "torno-cnc",
    spindlePower: 15,        // kW
    maxRpm: 6000,            // RPM
    diameter: 80,            // mm (diâmetro de usinagem)
    holderInterface: "25x25", // tamanho da haste / cone
    stability: "normal",     // good, normal, poor
    cutType: "continuous",   // continuous, light, heavy
    coolant: "internal"      // internal, external, dry
};

function initIsoWizard() {
    // 1. Seleção de Material (Passo 1)
    const materialCards = document.querySelectorAll(".material-option");
    materialCards.forEach(card => {
        card.addEventListener("click", () => {
            materialCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            wizardState.material = card.getAttribute("data-iso");
            
            // Avançar para o passo 2
            goToStep(2);
        });
    });

    // 2. Operação Principal (Passo 2)
    const mainOpBtns = document.querySelectorAll(".op-main-btn");
    mainOpBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            mainOpBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const selectedMainOp = btn.getAttribute("data-main-op");
            wizardState.mainOperation = selectedMainOp;

            // Mostrar container de sub-operações correto e esconder outros
            document.querySelectorAll(".sub-op-container").forEach(c => c.classList.add("hidden"));
            document.getElementById(`sub-ops-${selectedMainOp}`).classList.remove("hidden");

            // Configurar sub-operação padrão e diâmetro padrão
            const diameterInput = document.getElementById("mach-diameter-input");
            if (selectedMainOp === "torneamento") {
                wizardState.subOperation = "acabamento";
                if (diameterInput) diameterInput.value = 80;
            } else if (selectedMainOp === "fresamento") {
                wizardState.subOperation = "faceamento";
                if (diameterInput) diameterInput.value = 50;
            } else if (selectedMainOp === "furacao") {
                wizardState.subOperation = "plena";
                if (diameterInput) diameterInput.value = 18;
            }

            // Destacar a sub-operação padrão visualmente
            document.querySelectorAll(`.sub-op-container .op-option`).forEach(opt => opt.classList.remove("selected"));
            const defaultOpt = document.querySelector(`#sub-ops-${selectedMainOp} .op-option[data-sub-op="${wizardState.subOperation}"]`);
            if (defaultOpt) {
                defaultOpt.classList.add("selected");
            }

            // Atualizar o dropdown de interfaces/cones na máquina (Passo 3)
            updateHolderOptions();
        });
    });

    // Sub-operações (Passo 2)
    const subOpCards = document.querySelectorAll(".sub-op-container .op-option");
    subOpCards.forEach(card => {
        card.addEventListener("click", () => {
            subOpCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            wizardState.subOperation = card.getAttribute("data-sub-op");
        });
    });

    // Botões de navegação
    const btnGoTo3 = document.getElementById("btn-go-to-3");
    if (btnGoTo3) {
        btnGoTo3.addEventListener("click", () => {
            goToStep(3);
        });
    }

    const btnGoTo4 = document.getElementById("btn-go-to-4");
    if (btnGoTo4) {
        btnGoTo4.addEventListener("click", () => {
            // Ler dados da máquina no Passo 3
            const machType = document.getElementById("mach-type-select").value;
            const machPower = parseFloat(document.getElementById("mach-power-input").value) || 15;
            const machRpm = parseFloat(document.getElementById("mach-rpm-input").value) || 6000;
            const machDiameter = parseFloat(document.getElementById("mach-diameter-input").value) || 50;
            const machHolder = document.getElementById("mach-holder-select").value;

            wizardState.machineType = machType;
            wizardState.spindlePower = machPower;
            wizardState.maxRpm = machRpm;
            wizardState.diameter = machDiameter;
            wizardState.holderInterface = machHolder;

            goToStep(4);
        });
    }

    // Condições do Processo (Passo 4)
    // Estabilidade
    const stabilityOptions = document.querySelectorAll(".stability-option");
    stabilityOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            stabilityOptions.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            wizardState.stability = opt.getAttribute("data-stability");
        });
    });

    // Tipo de Corte
    const cutTypeOptions = document.querySelectorAll(".cut-type-option");
    cutTypeOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            cutTypeOptions.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            wizardState.cutType = opt.getAttribute("data-cut-type");
        });
    });

    // Refrigeração
    const coolantOptions = document.querySelectorAll(".coolant-option");
    coolantOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            coolantOptions.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            wizardState.coolant = opt.getAttribute("data-coolant");
        });
    });

    // Botões de Voltar
    document.getElementById("btn-back-to-1").addEventListener("click", () => goToStep(1));
    document.getElementById("btn-back-to-2").addEventListener("click", () => goToStep(2));
    document.getElementById("btn-back-to-3").addEventListener("click", () => goToStep(3));
    document.getElementById("btn-back-to-4").addEventListener("click", () => goToStep(4));

    // Botão Gerar Recomendação
    document.getElementById("btn-generate-rec").addEventListener("click", () => {
        if (!wizardState.material) {
            alert("Por favor, selecione um material no Passo 1.");
            goToStep(1);
            return;
        }
        generateToolRecommendation();
        goToStep(5);
    });

    // Ações do Passo 5
    document.getElementById("btn-reset-selection").addEventListener("click", resetWizard);
    document.getElementById("btn-export-to-calc").addEventListener("click", exportParamsToCalculator);
}

// Atualiza o select de portas-ferramentas com base na operação selecionada
function updateHolderOptions() {
    const select = document.getElementById("mach-holder-select");
    const label = document.getElementById("mach-holder-label");
    if (!select || !label) return;

    select.innerHTML = "";

    if (wizardState.mainOperation === "torneamento") {
        label.innerText = "Tamanho da Haste Quadrada ou Diâmetro Interno";
        select.innerHTML = `
            <option value="20x20">Haste Quadrada 20x20 mm</option>
            <option value="25x25" selected>Haste Quadrada 25x25 mm</option>
            <option value="32x32">Haste Quadrada 32x32 mm</option>
            <option value="d20">Barra de Mandrilar Interna Ø 20 mm</option>
            <option value="d25">Barra de Mandrilar Interna Ø 25 mm</option>
            <option value="d32">Barra de Mandrilar Interna Ø 32 mm</option>
        `;
        wizardState.holderInterface = "25x25";
    } else {
        label.innerText = "Cone de Fixação do Spindle (Interface)";
        select.innerHTML = `
            <option value="BT30">Cone BT30 / ISO 30</option>
            <option value="BT40" selected>Cone BT40 / ISO 40</option>
            <option value="BT50">Cone BT50 / ISO 50</option>
            <option value="HSK63">Cone HSK-A63</option>
            <option value="HSK100">Cone HSK-A100</option>
        `;
        wizardState.holderInterface = "BT40";
    }
}

function goToStep(stepNumber) {
    // Ocultar todos os passos
    document.querySelectorAll(".wizard-step").forEach(s => s.classList.add("hidden"));
    
    // Mostrar passo alvo
    const targetStep = document.getElementById(`wizard-step-${stepNumber}`);
    if (targetStep) targetStep.classList.remove("hidden");

    // Atualizar indicadores de passos
    document.querySelectorAll(".step-indicator").forEach(ind => ind.classList.remove("active"));
    for(let i = 1; i <= stepNumber; i++) {
        const indEl = document.getElementById(`step-indicator-${i}`);
        if (indEl) indEl.classList.add("active");
    }

    // Rolar para o topo do wizard de forma suave
    const cardEl = document.querySelector(".wizard-card");
    if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Variáveis globais para armazenar os valores finais da recomendação
let Vc_final = 0;
let feed_val = 0;
let ap_val = 0;

function generateToolRecommendation() {
    const dbEntry = TOOL_SELECTION_DB[wizardState.material][wizardState.mainOperation][wizardState.subOperation];
    
    if (!dbEntry) {
        console.error("Entrada de banco de dados não encontrada!");
        return;
    }

    // 1. Extrair Parâmetros Base
    const vc_avg = (dbEntry.vc_range[0] + dbEntry.vc_range[1]) / 2;
    const feed_avg = (dbEntry.feed_range[0] + dbEntry.feed_range[1]) / 2;
    const ap_avg = (dbEntry.ap_range[0] + dbEntry.ap_range[1]) / 2;

    // 2. Modificar parâmetros com base nas condições
    let vc_factor = 1.0;
    let feed_factor = 1.0;
    let ap_factor = 1.0;
    let warnings = [];

    // Ajuste de Estabilidade
    if (wizardState.stability === "poor") {
        vc_factor *= 0.80; // Reduzir Vc em 20%
        ap_factor *= 0.70;  // Reduzir profundidade de corte em 30% para evitar vibrações
        warnings.push("Vibração potencial: Velocidade e profundidade de corte reduzidas em prol da estabilidade.");
    } else if (wizardState.stability === "good") {
        vc_factor *= 1.10; // Aumentar Vc em 10%
    }

    // Ajuste de Tipo de Corte
    if (wizardState.cutType === "heavy") {
        vc_factor *= 0.85; // Reduzir Vc em 15%
        feed_factor *= 0.80; // Reduzir avanço para proteger a aresta de choques
        warnings.push("Corte interrompido pesado: Avanço e Vc reduzidos para aumentar a vida útil da aresta.");
    } else if (wizardState.cutType === "light") {
        vc_factor *= 0.95;
    }

    // Ajuste de Refrigeração
    if (wizardState.coolant === "dry") {
        if (["M", "S", "H"].includes(wizardState.material)) {
            vc_factor *= 0.75; // Inox, Titânio e Temperados precisam muito de refrigeração
            warnings.push("Usinagem a seco em material crítico: Velocidade de corte severamente reduzida para conter calor.");
        } else {
            warnings.push("Usinagem a seco: CVD alumina permite alto desempenho a seco, refrigeração a ar sugerida.");
        }
    }

    // Aplicar fatores
    Vc_final = Math.round(vc_avg * vc_factor);
    feed_val = parseFloat((feed_avg * feed_factor).toFixed(3));
    ap_val = parseFloat((ap_avg * ap_factor).toFixed(2));

    // Limitar aos valores do banco para segurança
    Vc_final = Math.max(dbEntry.vc_range[0], Math.min(dbEntry.vc_range[1], Vc_final));
    feed_val = Math.max(dbEntry.feed_range[0], Math.min(dbEntry.feed_range[1], feed_val));
    ap_val = Math.max(dbEntry.ap_range[0], Math.min(dbEntry.ap_range[1], ap_val));

    // 3. Preencher Dados no DOM do Passo 5
    document.getElementById("rec-grade-name").innerText = dbEntry.grade;
    document.getElementById("rec-geometry-name").innerText = dbEntry.geometry;
    document.getElementById("rec-coating-desc").innerText = dbEntry.coating;
    
    // Obter código do suporte
    let holderCode = dbEntry.holders[wizardState.holderInterface] || "Não listado para esta interface";
    document.getElementById("rec-holder-name").innerText = holderCode;
    
    // Traduzir interface amigável
    let interfaceText = wizardState.holderInterface;
    if (wizardState.holderInterface.includes("x")) interfaceText = `Haste Quadrada ${wizardState.holderInterface} mm`;
    else if (wizardState.holderInterface.startsWith("d")) interfaceText = `Barra Interna Ø ${wizardState.holderInterface.substring(1)} mm`;
    else interfaceText = `Flange Cone ${wizardState.holderInterface}`;
    document.getElementById("rec-holder-interface").innerText = interfaceText;

    // Valores finais de corte
    document.getElementById("rec-param-vc-val").innerText = `${Vc_final} m/min`;
    document.getElementById("rec-param-feed-val").innerText = `${feed_val} ${wizardState.mainOperation === 'fresamento' ? 'mm/z' : 'mm/v'}`;
    document.getElementById("rec-param-ap-val").innerText = `${ap_val} mm`;

    // 4. Validação Inteligente da Máquina
    const checkContainer = document.getElementById("rec-machine-check-container");
    if (!checkContainer) return;

    checkContainer.innerHTML = "";

    // Calcular rotação real
    let n = (Vc_final * 1000) / (Math.PI * wizardState.diameter);
    n = Math.round(n);

    // Calcular potência estimada
    let Pc = 0;
    if (wizardState.mainOperation === "torneamento") {
        Pc = (ap_val * feed_val * Vc_final * dbEntry.kc) / (60000 * 0.85);
    } else if (wizardState.mainOperation === "fresamento") {
        let z = 4;
        let ae = 0.7 * wizardState.diameter;
        let vf = feed_val * z * n;
        Pc = (ap_val * ae * vf * dbEntry.kc) / (60000000 * 0.85);
    } else if (wizardState.mainOperation === "furacao") {
        Pc = (Math.pow(wizardState.diameter, 2) * feed_val * Vc_final * dbEntry.kc) / (240000 * 0.85);
    }
    Pc = parseFloat(Pc.toFixed(2));

    // Validar limites
    let isRpmOk = n <= wizardState.maxRpm;
    let isPowerOk = Pc <= wizardState.spindlePower;

    let statusClass = "status-success";
    let statusIcon = "check-circle-2";
    let statusTitle = "Máquina Compatível";
    let statusDesc = `A rotação requerida (${n} RPM) e a potência estimada (${Pc} kW) estão dentro dos limites da máquina.`;

    if (!isRpmOk && !isPowerOk) {
        statusClass = "status-danger";
        statusIcon = "alert-triangle";
        statusTitle = "Máquina Incompatível";
        statusDesc = `Sobrecarga Crítica: Rotação (${n} RPM) excede o limite (${wizardState.maxRpm} RPM) e Potência (${Pc} kW) ultrapassa o Spindle (${wizardState.spindlePower} kW). Reduza os parâmetros de corte.`;
    } else if (!isRpmOk) {
        statusClass = "status-warning";
        statusIcon = "alert-circle";
        statusTitle = "Rotação Excedida";
        statusDesc = `A rotação necessária de ${n} RPM excede o limite máximo da máquina de ${wizardState.maxRpm} RPM. Recomenda-se reduzir a Vc ou utilizar um diâmetro maior.`;
    } else if (!isPowerOk) {
        statusClass = "status-warning";
        statusIcon = "alert-circle";
        statusTitle = "Potência Insuficiente";
        statusDesc = `A potência de corte estimada (${Pc} kW) ultrapassa a potência máxima do Spindle (${wizardState.spindlePower} kW). Sugere-se reduzir o avanço (f) ou a profundidade (ap).`;
    }

    checkContainer.innerHTML = `
        <div class="compatibility-status ${statusClass}">
            <i data-lucide="${statusIcon}"></i>
            <div>
                <strong>${statusTitle}</strong>
                <p>${statusDesc}</p>
            </div>
        </div>
        ${warnings.length > 0 ? `
            <div class="compatibility-warnings" style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.75rem;">
                <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">Ajustes de Fluxo:</span>
                <ul style="font-size: 0.8rem; color: #fef08a; padding-left: 1.2rem; margin-top: 0.25rem;">
                    ${warnings.map(w => `<li>${w}</li>`).join("")}
                </ul>
            </div>
        ` : ""}
    `;

    // Recriar ícones lucide dinâmicos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function resetWizard() {
    wizardState.material = null;
    
    // Resetar seleções visuais de materiais
    document.querySelectorAll(".material-option").forEach(c => c.classList.remove("selected"));

    // Resetar botões de operação para torneamento padrão
    const mainOpBtns = document.querySelectorAll(".op-main-btn");
    mainOpBtns.forEach(b => b.classList.remove("active"));
    const defaultMainBtn = document.querySelector(`.op-main-btn[data-main-op="torneamento"]`);
    if (defaultMainBtn) defaultMainBtn.classList.add("active");

    wizardState.mainOperation = "torneamento";
    wizardState.subOperation = "acabamento";

    // Ocultar containers de sub-operações extras
    document.querySelectorAll(".sub-op-container").forEach(c => c.classList.add("hidden"));
    const defaultSubContainer = document.getElementById("sub-ops-torneamento");
    if (defaultSubContainer) defaultSubContainer.classList.remove("hidden");

    // Destacar sub-operação padrão torneamento acabamento
    document.querySelectorAll(".sub-op-container .op-option").forEach(c => c.classList.remove("selected"));
    const defaultSubOpt = document.querySelector(`#sub-ops-torneamento .op-option[data-sub-op="acabamento"]`);
    if (defaultSubOpt) defaultSubOpt.classList.add("selected");

    // Resetar condições para padrão
    document.querySelectorAll(".stability-option").forEach(c => c.classList.remove("selected"));
    const defStability = document.querySelector(`.stability-option[data-stability="normal"]`);
    if (defStability) defStability.classList.add("selected");
    wizardState.stability = "normal";

    document.querySelectorAll(".cut-type-option").forEach(c => c.classList.remove("selected"));
    const defCutType = document.querySelector(`.cut-type-option[data-cut-type="continuous"]`);
    if (defCutType) defCutType.classList.add("selected");
    wizardState.cutType = "continuous";

    document.querySelectorAll(".coolant-option").forEach(c => c.classList.remove("selected"));
    const defCoolant = document.querySelector(`.coolant-option[data-coolant="internal"]`);
    if (defCoolant) defCoolant.classList.add("selected");
    wizardState.coolant = "internal";

    // Ir para o passo 1
    goToStep(1);
}

function exportParamsToCalculator() {
    // 1. Mudar operação global na calculadora
    currentOperation = wizardState.mainOperation;

    // Destacar botão da calculadora ativo
    const opButtons = document.querySelectorAll(".op-btn");
    opButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-op") === currentOperation) {
            btn.classList.add("active");
        }
    });

    // Mapear material do wizard para o select da calculadora
    const materialSelect = document.getElementById("material-select");
    if (materialSelect) {
        const materialMap = {
            "P": "p-aco",
            "M": "m-inox",
            "K": "k-fofo",
            "N": "n-al",
            "S": "s-super",
            "H": "h-duro"
        };
        const mappedVal = materialMap[wizardState.material] || "p-aco";
        materialSelect.value = mappedVal;
    }

    // Atualizar os inputs dinâmicos da calculadora
    renderDynamicInputs();

    // Preencher valores exportados nos inputs da calculadora
    const diameterInput = document.getElementById("input-diameter");
    const vcInput = document.getElementById("input-vc");
    const apInput = document.getElementById("input-ap");

    if (diameterInput) diameterInput.value = wizardState.diameter;
    if (vcInput) vcInput.value = Vc_final;
    if (apInput) apInput.value = ap_val;

    // Preencher avanço específico (torneamento/furação é fn, fresamento é fz)
    if (currentOperation === "fresamento") {
        const fzInput = document.getElementById("input-fz");
        if (fzInput) fzInput.value = feed_val;
    } else {
        const feedInput = document.getElementById("input-feed");
        if (feedInput) feedInput.value = feed_val;
    }

    // Atualizar Kc sugerido baseado na entrada do banco de dados
    const dbEntry = TOOL_SELECTION_DB[wizardState.material][wizardState.mainOperation][wizardState.subOperation];
    const kcInput = document.getElementById("input-kc");
    if (kcInput && dbEntry) {
        kcInput.value = dbEntry.kc;
    }

    // Calcular resultados instantâneos
    updateCalculations();

    // Mudar para a aba de Dados de Corte (Aba 1)
    const tabBtn = document.querySelector(`.tab-btn[data-tab="dados-corte"]`);
    if (tabBtn) {
        tabBtn.click();
    }

    // Mensagem de sucesso
    alert(`Parâmetros exportados com sucesso!\nOperação: ${wizardState.mainOperation.toUpperCase()}\nMaterial: ISO ${wizardState.material}\nVc: ${Vc_final} m/min | Avanço: ${feed_val} mm | ap: ${ap_val} mm`);
}


// --- MÓDULO: SOLUÇÃO DE PROBLEMAS (TROUBLESHOOTING) ---

function initTroubleshooting() {
    const catalogContainer = document.getElementById("wear-catalog");
    const searchInput = document.getElementById("trouble-search");
    const modal = document.getElementById("wear-modal");
    const modalClose = document.getElementById("modal-close");

    if (!catalogContainer) return;

    // Renderizar Galeria Inicial
    renderWearCatalog(WEAR_DATABASE);

    // Listener de Pesquisa
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = WEAR_DATABASE.filter(wear => 
                wear.name.toLowerCase().includes(query) || 
                wear.shortDesc.toLowerCase().includes(query) ||
                wear.typeName.toLowerCase().includes(query)
            );
            renderWearCatalog(filtered);
        });
    }

    // Fechar Modal
    if (modalClose) {
        modalClose.addEventListener("click", () => {
            if (modal) modal.classList.remove("active");
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
}

function renderWearCatalog(items) {
    const container = document.getElementById("wear-catalog");
    if (!container) return;

    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = `<p class="glass-card" style="grid-column: span 3; text-align: center; color: var(--text-muted);">Nenhum tipo de desgaste encontrado para a pesquisa.</p>`;
        return;
    }

    items.forEach(wear => {
        const card = document.createElement("div");
        card.className = "glass-card wear-card";
        card.innerHTML = `
            <div>
                <div class="wear-card-header">
                    <span class="wear-badge ${wear.type}">${wear.typeName}</span>
                </div>
                <h3>${wear.name}</h3>
                <p>${wear.shortDesc}</p>
            </div>
            <div class="wear-card-footer">
                <span>Solucionar Problema</span>
                <i data-lucide="arrow-right"></i>
            </div>
        `;

        card.addEventListener("click", () => openWearModal(wear));
        container.appendChild(card);
    });

    // Recriar ícones lucide dinâmicos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function openWearModal(wear) {
    const modal = document.getElementById("wear-modal");
    if (!modal) return;
    
    document.getElementById("modal-title").innerText = wear.name;
    
    const typeBadge = document.getElementById("modal-type-badge");
    if (typeBadge) {
        typeBadge.innerText = wear.typeName;
        typeBadge.className = `modal-badge-type wear-badge ${wear.type}`;
    }

    const diagContainer = document.getElementById("modal-diagram-container");
    if (diagContainer) diagContainer.innerHTML = wear.svg;
    
    const descEl = document.getElementById("modal-description");
    if (descEl) descEl.innerText = wear.desc;

    // Carregar causas
    const causesList = document.getElementById("modal-causes");
    if (causesList) {
        causesList.innerHTML = "";
        wear.causes.forEach(cause => {
            const li = document.createElement("li");
            li.innerText = cause;
            causesList.appendChild(li);
        });
    }

    // Carregar soluções com ícones
    const solutionsList = document.getElementById("modal-solutions");
    if (solutionsList) {
        solutionsList.innerHTML = "";
        wear.solutions.forEach(sol => {
            const li = document.createElement("li");
            li.innerHTML = `<i data-lucide="arrow-right-circle"></i> <span>${sol}</span>`;
            solutionsList.appendChild(li);
        });
    }

    modal.classList.add("active");

    // Recriar ícones lucide no modal
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
