/**
 * TEF Canada — Expression Orale (Speaking)
 * Course content: Classes 1 to 6
 *
 * Each class contains:
 *  - objectives : learning goals
 *  - lessons    : teaching blocks (heading + paragraphs + optional note/tip)
 *  - dialogue   : an example script (optional)
 *  - vocabulary : useful expressions (fr / en)
 *  - quiz       : practice questions
 *      * type "mcq"  -> multiple choice with a correct answer + explanation
 *      * type "open" -> open speaking prompt with a model answer to self-check against
 */

const COURSE = {
  title: "TEF Canada — Expression Orale",
  subtitle: "Cours de production orale · Classes 1 à 6",
  classes: [
    /* ============================= CLASS 1 ============================= */
    {
      id: 1,
      title: "Découvrir l'épreuve",
      subtitle: "Format, durée et évaluation de l'Expression Orale",
      duration: "≈ 60 min",
      objectives: [
        "Comprendre le déroulement complet de l'épreuve d'Expression Orale.",
        "Distinguer la Section A (obtenir des informations) et la Section B (convaincre).",
        "Connaître les critères de notation et l'échelle NCLC / CLB.",
        "Savoir gérer le temps de préparation et de passation."
      ],
      lessons: [
        {
          heading: "Qu'est-ce que le TEF Canada ?",
          body: [
            "Le TEF Canada (Test d'évaluation de français) est un examen reconnu par IRCC (Immigration, Réfugiés et Citoyenneté Canada) pour l'immigration économique et la citoyenneté.",
            "L'épreuve d'Expression Orale évalue votre capacité à communiquer à l'oral avec un examinateur, dans des situations proches de la vie réelle. Elle dure environ 15 minutes et se compose de deux tâches distinctes, la Section A et la Section B."
          ],
          note: "Vous parlez avec un examinateur (ou une personne qui joue un rôle). Ce n'est PAS un simple exposé : c'est une interaction."
        },
        {
          heading: "Section A — Obtenir des informations (≈ 5 minutes)",
          body: [
            "On vous remet une petite annonce (offre d'emploi, location, formation, service, vente…). Votre rôle : téléphoner ou vous adresser à une personne pour obtenir un maximum d'informations.",
            "Vous devez POSER DES QUESTIONS. C'est vous qui menez l'échange : l'examinateur répond, mais n'ajoute presque rien de lui-même. Si vous ne posez pas de questions, la conversation s'arrête."
          ]
        },
        {
          heading: "Section B — Convaincre / exprimer un point de vue (≈ 10 minutes)",
          body: [
            "On vous remet un court document (un fait de société, une proposition, une petite annonce d'un produit ou d'une activité). Votre rôle : convaincre votre interlocuteur (un ami, un collègue, un proche) de faire quelque chose ou d'adopter votre point de vue.",
            "Ici, vous devez ARGUMENTER : donner des arguments, des exemples, réagir aux objections, et rester convaincant jusqu'au bout."
          ],
          note: "Section A = je pose des questions. Section B = je défends une opinion. Ne confondez pas les deux !"
        },
        {
          heading: "Notation et niveaux (NCLC / CLB)",
          body: [
            "L'Expression Orale est notée sur 450 points, convertis en niveaux NCLC (Niveaux de compétence linguistique canadiens) / CLB. Par exemple, environ 310–348 points correspondent au NCLC 7, un niveau souvent visé pour Entrée express.",
            "L'examinateur évalue notamment : l'adéquation de la réponse à la tâche, la cohérence et la richesse du discours, l'étendue du vocabulaire, la correction grammaticale, l'aisance (fluidité) et la prononciation."
          ]
        }
      ],
      vocabulary: [
        { fr: "l'épreuve d'expression orale", en: "the speaking test" },
        { fr: "l'examinateur / l'examinatrice", en: "the examiner" },
        { fr: "une petite annonce", en: "a classified ad" },
        { fr: "obtenir des informations", en: "to obtain information" },
        { fr: "convaincre quelqu'un", en: "to convince someone" },
        { fr: "le temps de préparation", en: "preparation time" },
        { fr: "mener l'échange", en: "to lead the exchange" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "En Section A, quel est votre rôle principal ?",
          options: [
            "Donner votre opinion et la défendre",
            "Poser des questions pour obtenir des informations",
            "Raconter une histoire personnelle",
            "Corriger l'examinateur"
          ],
          answer: 1,
          explanation: "La Section A consiste à obtenir un maximum d'informations en posant des questions à partir d'une annonce."
        },
        {
          type: "mcq",
          question: "Combien de temps dure environ la Section B ?",
          options: ["2 minutes", "5 minutes", "10 minutes", "20 minutes"],
          answer: 2,
          explanation: "La Section B (convaincre) est la plus longue, environ 10 minutes, contre 5 minutes pour la Section A."
        },
        {
          type: "mcq",
          question: "Laquelle de ces compétences N'EST PAS évaluée à l'oral ?",
          options: [
            "L'aisance et la fluidité",
            "La richesse du vocabulaire",
            "L'orthographe",
            "La prononciation"
          ],
          answer: 2,
          explanation: "L'orthographe concerne l'écrit. À l'oral, on évalue la prononciation, l'aisance, la grammaire, le vocabulaire et la pertinence."
        },
        {
          type: "open",
          question: "Expliquez à voix haute, en 30 secondes, la différence entre la Section A et la Section B.",
          model: "La Section A dure environ cinq minutes : à partir d'une petite annonce, je dois poser des questions pour obtenir le maximum d'informations, c'est donc moi qui mène l'échange. La Section B dure environ dix minutes : je dois convaincre mon interlocuteur d'accepter une proposition ou de partager mon point de vue, en donnant des arguments et des exemples."
        }
      ]
    },

    /* ============================= CLASS 2 ============================= */
    {
      id: 2,
      title: "Section A — Poser des questions",
      subtitle: "Les trois formes de questions et le registre formel",
      duration: "≈ 60 min",
      objectives: [
        "Maîtriser les trois façons de poser une question en français.",
        "Utiliser le registre formel (vouvoiement) attendu en Section A.",
        "Employer les mots interrogatifs adaptés à chaque type d'information.",
        "Ouvrir et présenter l'appel de façon polie et naturelle."
      ],
      lessons: [
        {
          heading: "Les trois formes de la question",
          body: [
            "1) L'intonation (familier / oral courant) : « Vous proposez le logement meublé ? »",
            "2) « Est-ce que » (standard, très sûr) : « Est-ce que le logement est meublé ? »",
            "3) L'inversion (soutenu, valorisé à l'examen) : « Le logement est-il meublé ? »",
            "Variez les trois formes : cela montre l'étendue de votre grammaire. Mais en cas de doute, « est-ce que » est toujours correct et sûr."
          ],
          note: "L'inversion impressionne l'examinateur, mais une inversion incorrecte fait mauvais effet. Utilisez-la seulement quand vous êtes sûr(e)."
        },
        {
          heading: "Les mots interrogatifs essentiels",
          body: [
            "Quel / quelle / quels / quelles (+ nom) : « Quel est le prix ? », « Quelles sont les conditions ? »",
            "Combien : « Combien de temps dure la formation ? », « Combien coûte l'inscription ? »",
            "Où, quand, comment, pourquoi : lieu, moment, manière, raison.",
            "Qu'est-ce que / que : « Qu'est-ce qui est inclus dans le prix ? »"
          ]
        },
        {
          heading: "Le registre formel : vouvoyer",
          body: [
            "En Section A, vous vous adressez à un inconnu : vouvoyez toujours (« vous »).",
            "Ouvrez poliment : « Bonjour, je vous appelle au sujet de votre annonce pour… J'aurais quelques questions à vous poser. »",
            "Adoucissez vos questions avec le conditionnel : « Pourriez-vous me préciser… ? », « Est-ce qu'il serait possible de… ? »"
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Annonce : Cours de cuisine le samedi",
        lines: [
          { speaker: "Candidat", text: "Bonjour, je vous appelle au sujet de votre annonce pour les cours de cuisine du samedi. J'aurais quelques questions." },
          { speaker: "Examinateur", text: "Bonjour, bien sûr, je vous écoute." },
          { speaker: "Candidat", text: "Tout d'abord, à quelle heure le cours commence-t-il ?" },
          { speaker: "Examinateur", text: "Il commence à 10 heures." },
          { speaker: "Candidat", text: "Très bien. Et pourriez-vous me préciser combien coûte une séance ?" },
          { speaker: "Examinateur", text: "C'est 40 dollars la séance." },
          { speaker: "Candidat", text: "D'accord. Est-ce que le matériel et les ingrédients sont inclus dans ce prix ?" }
        ]
      },
      vocabulary: [
        { fr: "je vous appelle au sujet de…", en: "I'm calling about…" },
        { fr: "j'aurais quelques questions", en: "I have a few questions" },
        { fr: "Pourriez-vous me préciser… ?", en: "Could you specify for me…?" },
        { fr: "Est-ce qu'il serait possible de… ?", en: "Would it be possible to…?" },
        { fr: "Quel est le tarif / le prix ?", en: "What is the price?" },
        { fr: "Qu'est-ce qui est inclus ?", en: "What is included?" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quelle phrase utilise correctement l'inversion (registre soutenu) ?",
          options: [
            "Le cours il commence quand ?",
            "Quand est-ce que le cours commence ?",
            "Quand le cours commence-t-il ?",
            "Le cours commence quand ?"
          ],
          answer: 2,
          explanation: "« Quand le cours commence-t-il ? » : le sujet et le verbe sont inversés avec le trait d'union, c'est la forme soutenue."
        },
        {
          type: "mcq",
          question: "Pour demander le prix, quelle formulation est la plus adaptée et polie ?",
          options: [
            "C'est combien ?",
            "Pourriez-vous me préciser le tarif, s'il vous plaît ?",
            "Ça coûte cher ?",
            "Donnez-moi le prix."
          ],
          answer: 1,
          explanation: "Le conditionnel « Pourriez-vous » adoucit la demande et correspond au registre formel attendu."
        },
        {
          type: "mcq",
          question: "Complétez : « ______ sont les conditions d'inscription ? »",
          options: ["Quel", "Quelle", "Quels", "Quelles"],
          answer: 3,
          explanation: "« Conditions » est féminin pluriel, donc « Quelles ». L'accord du mot interrogatif « quel » suit le nom."
        },
        {
          type: "open",
          question: "Annonce : « À louer : appartement 2 chambres, centre-ville. » Posez 3 questions polies, chacune sous une forme différente (intonation, est-ce que, inversion).",
          model: "Intonation : « L'appartement est disponible tout de suite ? » — Est-ce que : « Est-ce que les charges sont comprises dans le loyer ? » — Inversion : « L'appartement est-il meublé ? » Vous pouvez ouvrir par : « Bonjour, je vous appelle au sujet de votre annonce pour l'appartement au centre-ville, j'aurais quelques questions. »"
        }
      ]
    },

    /* ============================= CLASS 3 ============================= */
    {
      id: 3,
      title: "Section A — Stratégies avancées",
      subtitle: "Couvrir tous les aspects, relancer et réagir",
      duration: "≈ 60 min",
      objectives: [
        "Balayer systématiquement tous les aspects d'une annonce (grille de questions).",
        "Réagir aux réponses et relancer la conversation.",
        "Reformuler et demander des précisions.",
        "Ouvrir et clôturer l'échange de façon naturelle."
      ],
      lessons: [
        {
          heading: "La grille des questions : ne rien oublier",
          body: [
            "Pour obtenir un maximum d'informations, pensez à couvrir plusieurs catégories : le PRIX (tarif, réductions, modes de paiement), le LIEU (adresse, accès, transport), le TEMPS (dates, horaires, durée), les CONDITIONS (qui peut participer, documents requis), et les DÉTAILS pratiques (ce qui est inclus, ce qu'il faut apporter).",
            "Astuce : mémorisez ces catégories comme une check-list mentale. Elles s'adaptent à presque toutes les annonces."
          ],
          note: "L'examinateur évalue la QUANTITÉ et la VARIÉTÉ des informations obtenues. Plus vous couvrez d'aspects, mieux c'est."
        },
        {
          heading: "Réagir et relancer",
          body: [
            "Ne posez pas vos questions comme une liste mécanique. Réagissez d'abord à la réponse : « Ah, très bien ! », « Parfait. », « D'accord, je vois. », puis enchaînez.",
            "Rebondissez sur une réponse pour creuser : si on vous dit « le cours dure 3 mois », relancez : « Et à quelle fréquence ont lieu les séances ? »",
            "Demandez des précisions : « C'est-à-dire ? », « Pourriez-vous développer un peu ? », « Qu'entendez-vous par là ? »"
          ]
        },
        {
          heading: "Ouvrir et clôturer proprement",
          body: [
            "Ouverture : « Bonjour, je vous appelle au sujet de votre annonce. J'aurais plusieurs questions, si vous avez un moment. »",
            "Clôture : « Je vous remercie beaucoup pour toutes ces informations. Je vais réfléchir et je vous recontacterai. Bonne journée ! »",
            "Une belle ouverture et une belle clôture encadrent votre performance et laissent une bonne impression."
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Annonce : Offre d'emploi, serveur/serveuse",
        lines: [
          { speaker: "Candidat", text: "Bonjour, je vous appelle au sujet de votre annonce pour le poste de serveur. J'aurais plusieurs questions." },
          { speaker: "Examinateur", text: "Bonjour, allez-y." },
          { speaker: "Candidat", text: "Pour commencer, quels seraient les horaires de travail ?" },
          { speaker: "Examinateur", text: "Principalement les soirs et les week-ends." },
          { speaker: "Candidat", text: "D'accord, je vois. Et à combien s'élèverait le salaire horaire ?" },
          { speaker: "Examinateur", text: "Quinze dollars de l'heure, plus les pourboires." },
          { speaker: "Candidat", text: "Parfait. Est-ce qu'une expérience préalable est exigée pour postuler ?" }
        ]
      },
      vocabulary: [
        { fr: "D'accord, je vois.", en: "OK, I see." },
        { fr: "C'est-à-dire ?", en: "Meaning? / That is?" },
        { fr: "Pourriez-vous développer ?", en: "Could you elaborate?" },
        { fr: "à quelle fréquence…", en: "how often…" },
        { fr: "Je vous remercie pour ces informations.", en: "Thank you for this information." },
        { fr: "Je vous recontacterai.", en: "I'll get back to you." }
      ],
      quiz: [
        {
          type: "mcq",
          question: "L'examinateur dit : « La formation dure six mois. » Quelle est la MEILLEURE relance ?",
          options: [
            "Merci, au revoir.",
            "Et à quelle fréquence ont lieu les cours pendant ces six mois ?",
            "Six mois, c'est long.",
            "Je n'ai pas compris."
          ],
          answer: 1,
          explanation: "Relancer avec une nouvelle question précise (la fréquence) montre que vous creusez le sujet et menez l'échange."
        },
        {
          type: "mcq",
          question: "Parmi ces catégories, laquelle manque le plus souvent dans les réponses des candidats ?",
          options: [
            "Le prix",
            "Les horaires",
            "Les conditions / documents requis",
            "L'adresse"
          ],
          answer: 2,
          explanation: "Les candidats pensent au prix et aux horaires mais oublient souvent les conditions (qui peut participer, quels documents fournir)."
        },
        {
          type: "mcq",
          question: "Quelle formule convient pour CLÔTURER l'échange ?",
          options: [
            "Bon, c'est tout ?",
            "Je vous remercie pour ces informations, je vous recontacterai. Bonne journée !",
            "Au revoir.",
            "OK ciao."
          ],
          answer: 1,
          explanation: "Une clôture polie et complète (remerciement + intention + salutation) laisse une bonne impression finale."
        },
        {
          type: "open",
          question: "Annonce : « Stage intensif de photographie — 1 semaine. » Préparez 5 questions couvrant 5 catégories différentes (prix, lieu, temps, conditions, détails).",
          model: "Prix : « Quel est le tarif du stage, et existe-t-il des réductions ? » — Lieu : « Où le stage se déroule-t-il exactement ? » — Temps : « Quels sont les horaires quotidiens ? » — Conditions : « Faut-il apporter son propre appareil photo ? » — Détails : « Qu'est-ce qui est inclus : le matériel, un certificat, un repas ? »"
        }
      ]
    },

    /* ============================= CLASS 4 ============================= */
    {
      id: 4,
      title: "Section B — Convaincre : les bases",
      subtitle: "Structurer une argumentation et exprimer son opinion",
      duration: "≈ 60 min",
      objectives: [
        "Structurer un discours persuasif : introduction, arguments, conclusion.",
        "Exprimer clairement son opinion.",
        "Utiliser les connecteurs logiques d'argumentation.",
        "Appuyer chaque argument par un exemple concret."
      ],
      lessons: [
        {
          heading: "La structure d'un discours convaincant",
          body: [
            "1) Introduction : annoncez votre intention. « J'aimerais te convaincre de… parce que je pense que c'est une excellente idée. »",
            "2) Arguments : présentez 2 ou 3 arguments, chacun suivi d'un exemple. « D'abord… ; ensuite… ; enfin… »",
            "3) Conclusion : reformulez et lancez un appel à l'action. « Alors, qu'en penses-tu ? On y va ? »"
          ],
          note: "En Section B, vous tutoyez souvent (« tu ») car l'interlocuteur est un ami ou un proche. Vérifiez la consigne : ami = tu, collègue/supérieur = vous."
        },
        {
          heading: "Exprimer son opinion",
          body: [
            "À mon avis… / Selon moi… / Je pense que… / Je suis convaincu(e) que…",
            "Ce qui me semble important, c'est… / Il me paraît essentiel de…",
            "Personnellement, je trouve que… / J'ai la conviction que…",
            "Variez ces expressions : répéter « je pense que » à chaque phrase appauvrit le discours."
          ]
        },
        {
          heading: "Les connecteurs logiques",
          body: [
            "Ajouter : d'abord, ensuite, de plus, par ailleurs, enfin.",
            "Illustrer : par exemple, en effet, c'est le cas de, notamment.",
            "Cause / conséquence : parce que, car, c'est pourquoi, donc, ainsi.",
            "Conclure : en conclusion, pour toutes ces raisons, en somme, finalement."
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Convaincre un ami de partir en randonnée le week-end",
        lines: [
          { speaker: "Candidat", text: "Écoute, j'aimerais te convaincre de venir faire une randonnée ce week-end. Je pense que ce serait vraiment bénéfique pour nous deux." },
          { speaker: "Ami (examinateur)", text: "Bof, j'avais prévu de rester à la maison…" },
          { speaker: "Candidat", text: "Je comprends, mais écoute mes arguments. D'abord, on passe toute la semaine enfermés au bureau ; prendre l'air nous ferait un bien fou. Par exemple, la dernière fois, on s'est sentis beaucoup plus détendus après." },
          { speaker: "Ami (examinateur)", text: "C'est vrai que ça détend…" },
          { speaker: "Candidat", text: "Ensuite, c'est gratuit et bon pour la santé. Enfin, ce serait l'occasion de passer du temps ensemble. Alors, qu'en dis-tu, on y va ?" }
        ]
      },
      vocabulary: [
        { fr: "j'aimerais te convaincre de…", en: "I'd like to convince you to…" },
        { fr: "à mon avis / selon moi", en: "in my opinion" },
        { fr: "je suis convaincu(e) que", en: "I'm convinced that" },
        { fr: "d'abord… ensuite… enfin", en: "first… then… finally" },
        { fr: "par exemple", en: "for example" },
        { fr: "qu'en penses-tu ? / qu'en dis-tu ?", en: "what do you think?" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quel est le bon ordre pour structurer votre discours ?",
          options: [
            "Conclusion, arguments, introduction",
            "Introduction, arguments avec exemples, conclusion",
            "Arguments, introduction, exemples",
            "Exemples, conclusion, introduction"
          ],
          answer: 1,
          explanation: "On annonce son intention, on développe des arguments illustrés par des exemples, puis on conclut par un appel à l'action."
        },
        {
          type: "mcq",
          question: "Quel connecteur exprime une CONSÉQUENCE ?",
          options: ["par exemple", "c'est pourquoi", "d'abord", "cependant"],
          answer: 1,
          explanation: "« C'est pourquoi » introduit une conséquence. « Par exemple » illustre, « d'abord » ajoute, « cependant » oppose."
        },
        {
          type: "mcq",
          question: "Pour éviter la répétition, par quoi remplacer « je pense que » ?",
          options: [
            "je pense que (encore)",
            "il me semble que / à mon avis / je suis convaincu(e) que",
            "peut-être",
            "je ne sais pas"
          ],
          answer: 1,
          explanation: "Varier les tournures d'opinion enrichit le discours et montre l'étendue du vocabulaire."
        },
        {
          type: "open",
          question: "Sujet : Convaincre un ami de s'inscrire à un cours de français avec vous. Donnez une introduction et 2 arguments illustrés d'exemples.",
          model: "Introduction : « J'aimerais te convaincre de t'inscrire au cours de français avec moi, je suis sûr que tu ne le regretteras pas. » Argument 1 : « D'abord, apprendre à deux, c'est plus motivant : on pourra réviser ensemble. Par exemple, on se donnerait des devoirs mutuellement. » Argument 2 : « Ensuite, le français ouvre des portes au Canada : notamment pour l'emploi et l'immigration. » Conclusion : « Alors, on s'inscrit ensemble ? »"
        }
      ]
    },

    /* ============================= CLASS 5 ============================= */
    {
      id: 5,
      title: "Section B — Persuasion avancée",
      subtitle: "Répondre aux objections et rester convaincant",
      duration: "≈ 60 min",
      objectives: [
        "Anticiper et traiter les objections de l'interlocuteur.",
        "Utiliser la concession pour renforcer son argument.",
        "Insister et reformuler sans se répéter.",
        "Employer des exemples concrets et des tournures persuasives."
      ],
      lessons: [
        {
          heading: "Traiter les objections",
          body: [
            "En Section B, l'examinateur va résister : « Je n'ai pas le temps », « C'est trop cher », « Ça ne m'intéresse pas ». C'est NORMAL et attendu. Ne vous découragez pas : rebondissez !",
            "Méthode : accueillir l'objection, puis la retourner. « Je comprends que le temps te manque, mais justement, cette activité ne prend qu'une heure et te fera gagner en énergie. »"
          ],
          note: "Ne dites jamais « d'accord, tant pis ». Un bon candidat continue à convaincre jusqu'à la fin de l'épreuve."
        },
        {
          heading: "La concession : reconnaître pour mieux convaincre",
          body: [
            "Concéder un point renforce votre crédibilité : « Certes, c'est un petit investissement, mais les bénéfices sont bien plus grands. »",
            "Expressions utiles : « certes… mais », « je comprends que… cependant », « bien sûr… néanmoins », « il est vrai que… toutefois ».",
            "La structure « concession + argument fort » est très valorisée à l'examen."
          ]
        },
        {
          heading: "Insister et persuader",
          body: [
            "Insister : « Crois-moi… », « Je t'assure que… », « Franchement, tu ne le regretteras pas. »",
            "Impliquer l'autre : « Imagine un peu… », « Tu te rends compte des avantages ? »",
            "Rassurer : « Ne t'inquiète pas, je serai là. », « On peut essayer une seule fois, pour voir. »",
            "Appel final : « Fais-moi confiance, on tente le coup ? »"
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Convaincre un collègue de covoiturer (avec objections)",
        lines: [
          { speaker: "Candidat", text: "J'aimerais te proposer de faire du covoiturage avec moi pour aller au travail." },
          { speaker: "Collègue (examinateur)", text: "Hmm, je préfère être indépendant avec ma propre voiture." },
          { speaker: "Candidat", text: "Je comprends ton attachement à ton indépendance, mais réfléchis : on partagerait les frais d'essence, donc on économiserait tous les deux chaque mois." },
          { speaker: "Collègue (examinateur)", text: "Oui, mais si nos horaires ne correspondent pas ?" },
          { speaker: "Candidat", text: "Certes, il faut un peu s'organiser, mais on peut convenir d'un horaire commun. Et franchement, c'est aussi plus écologique, moins de voitures sur la route. Crois-moi, on essaie une semaine, et tu verras !" }
        ]
      },
      vocabulary: [
        { fr: "je comprends que…, mais…", en: "I understand that…, but…" },
        { fr: "certes… néanmoins / toutefois", en: "admittedly… nevertheless" },
        { fr: "crois-moi / je t'assure", en: "believe me / I assure you" },
        { fr: "imagine un peu…", en: "just imagine…" },
        { fr: "on tente le coup ?", en: "shall we give it a shot?" },
        { fr: "tu ne le regretteras pas", en: "you won't regret it" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Votre interlocuteur dit « C'est trop cher ». Quelle est la meilleure réaction ?",
          options: [
            "D'accord, tant pis alors.",
            "Certes, il y a un coût, mais pense aux économies que tu feras sur le long terme.",
            "Non, ce n'est pas cher.",
            "Tu as raison."
          ],
          answer: 1,
          explanation: "On concède le point (« certes ») puis on le retourne avec un argument fort : c'est la technique de la concession."
        },
        {
          type: "mcq",
          question: "Quelle expression sert à INSISTER de façon convaincante ?",
          options: [
            "peut-être bien",
            "je ne suis pas sûr",
            "crois-moi, tu ne le regretteras pas",
            "comme tu veux"
          ],
          answer: 2,
          explanation: "« Crois-moi, tu ne le regretteras pas » implique l'interlocuteur et renforce la persuasion."
        },
        {
          type: "mcq",
          question: "Face aux objections répétées de l'examinateur, il faut :",
          options: [
            "abandonner poliment",
            "changer de sujet",
            "continuer à argumenter et proposer un compromis",
            "répéter exactement le même argument"
          ],
          answer: 2,
          explanation: "Les objections sont attendues : on continue à convaincre, on reformule et on propose un compromis (« essaie une fois »)."
        },
        {
          type: "open",
          question: "Sujet : Convaincre un ami de réduire son usage de la voiture. Il répond « Mais c'est tellement pratique ! ». Répondez avec une concession + un argument fort + un appel final.",
          model: "« Je comprends, c'est vrai que la voiture est pratique au quotidien. Cependant, si tu marchais ou prenais le vélo pour les petits trajets, tu ferais des économies et tu améliorerais ta santé, sans compter le bénéfice pour la planète. Franchement, essaie juste une semaine, tu verras la différence. On tente le coup ? »"
        }
      ]
    },

    /* ============================= CLASS 6 ============================= */
    {
      id: 6,
      title: "Examen blanc & conseils finaux",
      subtitle: "Mise en situation complète et derniers réflexes",
      duration: "≈ 75 min",
      objectives: [
        "Réaliser un examen blanc complet (Section A + Section B).",
        "Identifier et éviter les erreurs les plus fréquentes.",
        "Améliorer l'aisance, la fluidité et la prononciation.",
        "Adopter les bons réflexes le jour de l'examen."
      ],
      lessons: [
        {
          heading: "Examen blanc — Section A",
          body: [
            "Annonce : « COURS DE NATATION pour adultes — Piscine municipale. Débutants et intermédiaires bienvenus. Inscriptions ouvertes. »",
            "Consigne : Vous téléphonez pour obtenir un maximum d'informations. Préparez vos questions (2 minutes), puis « jouez » l'appel à voix haute pendant environ 5 minutes.",
            "Pensez à couvrir : horaires, prix, niveau requis, matériel, lieu/accès, inscription."
          ],
          note: "Chronométrez-vous ! Le jour J, la gestion du temps fait la différence."
        },
        {
          heading: "Examen blanc — Section B",
          body: [
            "Document : « Une salle de sport vient d'ouvrir près de chez vous. Abonnement mensuel avantageux. »",
            "Consigne : Convainquez un(e) ami(e) de s'y inscrire avec vous. Préparez (2 minutes), puis argumentez pendant environ 10 minutes en répondant aux objections.",
            "Structure : introduction → 3 arguments illustrés → réponses aux objections → conclusion avec appel à l'action."
          ]
        },
        {
          heading: "Les erreurs les plus fréquentes",
          body: [
            "Confondre les tâches : poser des questions en Section B, ou donner son avis en Section A.",
            "S'arrêter trop tôt : ne pas remplir le temps imparti (parlez jusqu'au bout !).",
            "Rester monotone : varier l'intonation et montrer de l'enthousiasme, surtout en Section B.",
            "Négliger l'ouverture et la clôture : toujours saluer, remercier, conclure poliment.",
            "Abandonner face aux objections : continuez à convaincre."
          ]
        },
        {
          heading: "Aisance, fluidité et prononciation",
          body: [
            "Gagnez du temps sans silence gênant : « Alors… », « Eh bien… », « Voyons voir… », « C'est une bonne question. »",
            "Ne cherchez pas la perfection : mieux vaut une phrase simple et correcte qu'une phrase compliquée ratée.",
            "Soignez la liaison et le rythme. Entraînez-vous à voix haute chaque jour, et enregistrez-vous pour vous corriger.",
            "Respirez et ralentissez : un débit posé est plus clair et plus convaincant qu'un débit précipité."
          ]
        }
      ],
      dialogue: {
        title: "Rappel express — les 5 réflexes gagnants",
        lines: [
          { speaker: "Réflexe 1", text: "Je lis la consigne : est-ce Section A (questions) ou Section B (convaincre) ?" },
          { speaker: "Réflexe 2", text: "Je vouvoie un inconnu, je tutoie un ami — selon la consigne." },
          { speaker: "Réflexe 3", text: "J'ouvre poliment et je clôture par un remerciement." },
          { speaker: "Réflexe 4", text: "Je varie mes tournures et mes connecteurs." },
          { speaker: "Réflexe 5", text: "Je parle jusqu'au bout du temps imparti, sans abandonner." }
        ]
      },
      vocabulary: [
        { fr: "Alors… / Eh bien… / Voyons voir…", en: "So… / Well… / Let's see… (fillers)" },
        { fr: "C'est une bonne question.", en: "That's a good question." },
        { fr: "le temps imparti", en: "the allotted time" },
        { fr: "gérer son temps", en: "to manage one's time" },
        { fr: "s'entraîner à voix haute", en: "to practise out loud" },
        { fr: "un débit posé", en: "a steady/calm pace of speech" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quelle est l'erreur la plus grave à l'examen ?",
          options: [
            "Faire une petite faute de grammaire",
            "Confondre la tâche : donner son avis en Section A au lieu de poser des questions",
            "Utiliser « est-ce que »",
            "Marquer une courte pause"
          ],
          answer: 1,
          explanation: "Se tromper de tâche fait perdre énormément de points : Section A = questions, Section B = convaincre."
        },
        {
          type: "mcq",
          question: "Que faire quand il vous reste du temps et que vous ne savez plus quoi dire ?",
          options: [
            "Se taire jusqu'à la fin",
            "Dire « j'ai fini »",
            "Poser une question de plus (A) ou ajouter un argument/exemple (B)",
            "Répéter mot pour mot ce qui a déjà été dit"
          ],
          answer: 2,
          explanation: "Utilisez tout le temps imparti : une question supplémentaire en A, un argument ou un exemple en B."
        },
        {
          type: "mcq",
          question: "Pour améliorer l'aisance, quel réflexe est utile ?",
          options: [
            "Parler le plus vite possible",
            "Utiliser des mots de remplissage naturels (« alors… », « eh bien… ») et respirer",
            "Faire de longues phrases très complexes",
            "Éviter complètement de faire des pauses"
          ],
          answer: 1,
          explanation: "Des amorces naturelles et une respiration posée donnent de la fluidité, mieux que la précipitation."
        },
        {
          type: "open",
          question: "Examen blanc final : réalisez l'appel complet de la Section A (cours de natation) à voix haute, en 5 minutes chronométrées. Enregistrez-vous.",
          model: "Ouverture : « Bonjour, je vous appelle au sujet de votre annonce pour les cours de natation, j'aurais plusieurs questions. » Puis couvrez : horaires (« Quels sont les créneaux proposés ? »), prix (« Quel est le tarif mensuel ? Y a-t-il des réductions ? »), niveau (« Les cours sont-ils adaptés aux vrais débutants ? »), matériel (« Faut-il apporter son maillot et son bonnet ? »), lieu (« Comment accède-t-on à la piscine en transport en commun ? »), inscription (« Comment procède-t-on pour s'inscrire ? »). Clôture : « Je vous remercie pour toutes ces informations, je vais réfléchir et je vous recontacterai. Bonne journée ! » — Comparez votre enregistrement à ces critères : ai-je couvert 5–6 catégories ? ai-je varié mes formes de questions ? ai-je bien ouvert et clôturé ?"
        }
      ]
    }
  ]
};

// Expose the data for the app (and allow module import if ever bundled).
if (typeof window !== "undefined") {
  window.COURSE = COURSE;
}
