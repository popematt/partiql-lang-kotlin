window.BENCHMARK_DATA = {
  "lastUpdate": 1715109731333,
  "repoUrl": "https://github.com/popematt/partiql-lang-kotlin",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "popematt@amazon.com",
            "name": "Matthew Pope",
            "username": "popematt"
          },
          "committer": {
            "email": "popematt@amazon.com",
            "name": "Matthew Pope",
            "username": "popematt"
          },
          "distinct": true,
          "id": "40dc03e01f454d5f3922042c17dd67aba3fd9d2e",
          "message": "Remove another unused import",
          "timestamp": "2024-05-07T10:00:02-07:00",
          "tree_id": "95ec6834d5b9d82758367843a43e56617b351508",
          "url": "https://github.com/popematt/partiql-lang-kotlin/commit/40dc03e01f454d5f3922042c17dd67aba3fd9d2e"
        },
        "date": 1715109730566,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithInterruptible",
            "value": 258.05875676193443,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithoutInterruptible",
            "value": 261.5176150082621,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithInterruptible",
            "value": 235.9020047478801,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithoutInterruptible",
            "value": 250.86595793506189,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithInterruptible",
            "value": 178.31083718944262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithoutInterruptible",
            "value": 176.67390286889153,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithInterruptible",
            "value": 13237355.681400001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithoutInterruptible",
            "value": 13175673.858,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithInterruptible",
            "value": 5095220.4721,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithoutInterruptible",
            "value": 5058714.098499999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithInterruptible",
            "value": 44.466693199608315,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithoutInterruptible",
            "value": 38.757388829049084,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithInterruptible",
            "value": 13138095.7209,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithoutInterruptible",
            "value": 13171704.10325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithInterruptible",
            "value": 4964140.090450001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithoutInterruptible",
            "value": 5078810.1376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithInterruptible",
            "value": 95522.89842977271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithoutInterruptible",
            "value": 97942.3559,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 97.50383282600369,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 153.75073683095943,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 374317.2671833333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 727829.7426499999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 7240319.060949999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 135.91734455683138,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 256.74103448236644,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 33.807624067417706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 43.530910137514056,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 238.1636814179696,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 405.8211600891003,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 158.37335832681748,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 48.375491171490744,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 33.68621112038532,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 32.01380469990807,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 57.94340607556685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 41.48182315349716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 48.41716025103564,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 51.64051339557441,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 84.46296149328997,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 13.76255395159212,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 52.26551715478079,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 162.99639966416788,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 85.70380629982172,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 38.52176044131825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 43.49152392309796,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 60.15952536184434,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 580.0048228122627,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 12.244386089043822,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.84827417362837,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 57.69594792519321,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 158.1734821179257,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 23.86506714896806,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 16.88754086285168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 23.009571995891065,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 39.95821469731716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 19.38538884227169,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 192.19785491977868,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 748.7897177653098,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 18.75461989776755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 185.6622413905851,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 85.28542061104982,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 164.37027648135293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 45.71928671642142,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 28.821229915414015,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 29.288750773553602,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 55.05903922543263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 24.966190418556074,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 99.99261694245943,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 34.10173488424745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 72.17557394796425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 61.973424717577856,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 49.55445685668148,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 130.7670455949283,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 44.86638963782981,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 97.43240302375273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 63.314301755302985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 57.17146931937209,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 106.89673817980938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 8.289398214936096,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 54.30709353563533,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 40.321169621984765,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 79.01733746782271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 14.84626487268126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 14.638055290909634,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 13.137937518931926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 25.44215232441861,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 5.782076417785936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 302.93326266217673,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 797.4234832090065,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 7.108043978535131,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 1.9701389635254283,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 7.5428715018805175,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testCompileQuery1",
            "value": 6.897248152598701,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testCompileQuery2",
            "value": 13.760139922290387,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testCompileQuery3",
            "value": 15.190448927432715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testCompileQuery4",
            "value": 22.253120858514837,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testCompileQuery5",
            "value": 24.55160367438878,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery1",
            "value": 145215.82128125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery10",
            "value": 15.072649457195658,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery11",
            "value": 2.4600695094358054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery2",
            "value": 234582.83973999997,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery3",
            "value": 245178.83992250008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery4",
            "value": 295480.22276249994,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery5",
            "value": 308821.9598374999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery6",
            "value": 352518.7990333334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery7",
            "value": 29245.03398346405,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery8",
            "value": 2786.167313393339,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineAsyncBenchmark.testEvalQuery9",
            "value": 251.94310732342154,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testCompileQuery1",
            "value": 6.832472873598931,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testCompileQuery2",
            "value": 13.685761364588377,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testCompileQuery3",
            "value": 14.7737268832133,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testCompileQuery4",
            "value": 21.138120627691443,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testCompileQuery5",
            "value": 22.26742350178582,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery1",
            "value": 129833.57800625004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery10",
            "value": 9.511944102077425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery11",
            "value": 1.3644563954493925,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery2",
            "value": 197584.8450483333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery3",
            "value": 192543.40232833335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery4",
            "value": 242258.22729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery5",
            "value": 231461.49739000006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery6",
            "value": 290355.28917500004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery7",
            "value": 22606.33163853357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery8",
            "value": 2161.992902639903,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLCompilerPipelineBenchmark.testEvalQuery9",
            "value": 197.18779935681792,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameCaseWhenThen",
            "value": 32.22964748010686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery",
            "value": 42.009804480136985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery01",
            "value": 237.41383443440685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery02",
            "value": 416.1437837113484,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 155.06061311108687,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExec20Expressions",
            "value": 45.81214162361424,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameFromLet",
            "value": 32.76299428835995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPattern",
            "value": 31.4226464742358,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPreFilters",
            "value": 55.53873636858375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGroupLimit",
            "value": 39.353443627268945,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 47.6421732264516,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameManyJoins",
            "value": 47.702488106310014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedAggregates",
            "value": 83.13650009533191,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedParen",
            "value": 13.215280493356213,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNamePivot",
            "value": 51.7269977182351,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 156.40636010075184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery30Plus",
            "value": 85.3666865513591,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFunc",
            "value": 38.83223878380453,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 43.03606794343496,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryList",
            "value": 58.50409622522918,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 573.4415540058014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuerySimple",
            "value": 11.9225429684376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.279096887537253,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralProjections",
            "value": 54.92384625370032,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralSelect",
            "value": 157.8001448149525,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSimpleInsert",
            "value": 22.28560277140313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeJoins",
            "value": 16.427695951917226,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeProjections",
            "value": 21.73484937390719,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeSelect",
            "value": 40.747096778021096,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameTimeZone",
            "value": 18.877805224232752,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery",
            "value": 188.8880812938315,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 757.8514851812957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameCaseWhenThen",
            "value": 23.829141145726567,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameComplexQuery",
            "value": 240.5748572668386,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameComplexQuery01",
            "value": 124.30440149549365,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 266.9871479986253,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExec20Expressions",
            "value": 63.33212881390583,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameFromLet",
            "value": 41.134773361596125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPattern",
            "value": 44.99214778323256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPreFilters",
            "value": 82.77554071043633,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGroupLimit",
            "value": 28.4684614093271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 116.0333653333336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameManyJoins",
            "value": 43.33512255346776,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedAggregates",
            "value": 100.79586999365438,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedParen",
            "value": 67.18913356927911,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNamePivot",
            "value": 63.26517725763988,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 190.2888405863686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery30Plus",
            "value": 57.724185584698226,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFunc",
            "value": 114.92261589471146,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFuncInProjection",
            "value": 78.45737498702951,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryList",
            "value": 68.7392673718109,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryNestedSelect",
            "value": 136.39975263405645,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuerySimple",
            "value": 12.201834896265176,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralJoins",
            "value": 80.6293200571581,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralProjections",
            "value": 63.66972140730953,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralSelect",
            "value": 117.43971166380823,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSimpleInsert",
            "value": 22.481274195282207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeJoins",
            "value": 20.44058021273704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeProjections",
            "value": 18.411517773180147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeSelect",
            "value": 36.31418086679359,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameTimeZone",
            "value": 7.460920469575072,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery",
            "value": 472.4379166714428,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery01",
            "value": 1128.7897350631927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      }
    ]
  }
}