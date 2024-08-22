var Module = void 0 !== Module ? Module : {};
Module.expectedDataFileDownloads || (Module.expectedDataFileDownloads = 0),
  Module.expectedDataFileDownloads++,
  Module.ENVIRONMENT_IS_PTHREAD ||
    (function (a) {
      "object" == typeof window
        ? window.encodeURIComponent(
            window.location.pathname
              .toString()
              .substring(
                0,
                window.location.pathname.toString().lastIndexOf("/")
              ) + "/"
          )
        : "undefined" == typeof process &&
          "undefined" != typeof location &&
          encodeURIComponent(
            location.pathname
              .toString()
              .substring(0, location.pathname.toString().lastIndexOf("/")) + "/"
          );
      var e = "index.data";
      "function" != typeof Module.locateFilePackage ||
        Module.locateFile ||
        ((Module.locateFile = Module.locateFilePackage),
        err(
          "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"
        ));
      var u,
        l,
        n,
        r,
        d,
        t = Module.locateFile ? Module.locateFile(e, "") : e,
        e = a.remote_package_size,
        s = null,
        i = Module.getPreloadedPackage
          ? Module.getPreloadedPackage(t, e)
          : null;
      function o() {
        function r(e, t) {
          if (!e) throw t + new Error().stack;
        }
        function o(e, t, n) {
          (this.start = e), (this.end = t), (this.audio = n);
        }
        Module.FS_createPath("/", "assets", !0, !0),
          Module.FS_createPath("/assets", "blocks", !0, !0),
          Module.FS_createPath("/assets", "views", !0, !0),
          Module.FS_createPath("/assets", "games", !0, !0),
          Module.FS_createPath("/assets", "sounds", !0, !0),
          (o.prototype = {
            requests: {},
            open: function (e, t) {
              (this.name = t),
                (this.requests[t] = this),
                Module.addRunDependency("fp " + this.name);
            },
            send: function () {},
            onload: function () {
              var e = this.byteArray.subarray(this.start, this.end);
              this.finish(e);
            },
            finish: function (e) {
              Module.FS_createDataFile(this.name, null, e, !0, !0, !0),
                Module.removeRunDependency("fp " + this.name),
                (this.requests[this.name] = null);
            },
          });
        for (var e = a.files, t = 0; t < e.length; ++t)
          new o(e[t].start, e[t].end, e[t].audio || 0).open(
            "GET",
            e[t].filename
          );
        function n(e) {
          r(e, "Loading data file failed."),
            r(e instanceof ArrayBuffer, "bad input to processPackageData");
          e = new Uint8Array(e);
          o.prototype.byteArray = e;
          for (var t = a.files, n = 0; n < t.length; ++n)
            o.prototype.requests[t[n].filename].onload();
          Module.removeRunDependency("datafile_index.data");
        }
        Module.addRunDependency("datafile_index.data"),
          Module.preloadResults || (Module.preloadResults = {}),
          (Module.preloadResults["index.data"] = { fromCache: !1 }),
          i ? (n(i), (i = null)) : (s = n);
      }
      i ||
        ((u = t),
        (l = e),
        (n = function (e) {
          s ? (s(e), (s = null)) : (i = e);
        }),
        (r = function (e) {
          console.error("package error:", e);
        }),
        "object" != typeof process ||
        "object" != typeof process.versions ||
        "string" != typeof process.versions.node
          ? ((d = new XMLHttpRequest()).open("GET", u, !0),
            (d.responseType = "arraybuffer"),
            (d.onprogress = function (e) {
              var t = u,
                n = l;
              if ((e.total && (n = e.total), e.loaded)) {
                d.addedTotal
                  ? (Module.dataFileDownloads[t].loaded = e.loaded)
                  : ((d.addedTotal = !0),
                    Module.dataFileDownloads || (Module.dataFileDownloads = {}),
                    (Module.dataFileDownloads[t] = {
                      loaded: e.loaded,
                      total: n,
                    }));
                var r,
                  o = 0,
                  a = 0,
                  s = 0;
                for (r in Module.dataFileDownloads) {
                  var i = Module.dataFileDownloads[r];
                  (o += i.total), (a += i.loaded), s++;
                }
                (o = Math.ceil((o * Module.expectedDataFileDownloads) / s)),
                  Module.setStatus &&
                    Module.setStatus(
                      "Downloading data... (" + a + "/" + o + ")"
                    );
              } else
                Module.dataFileDownloads ||
                  (Module.setStatus && Module.setStatus("Downloading data..."));
            }),
            (d.onerror = function (e) {
              throw new Error("NetworkError for: " + u);
            }),
            (d.onload = function (e) {
              if (
                !(
                  200 == d.status ||
                  304 == d.status ||
                  206 == d.status ||
                  (0 == d.status && d.response)
                )
              )
                throw new Error(d.statusText + " : " + d.responseURL);
              var t = d.response;
              n(t);
            }),
            d.send(null))
          : require("fs").readFile(u, function (e, t) {
              e ? r(e) : n(t.buffer);
            })),
        Module.calledRun
          ? o()
          : (Module.preRun || (Module.preRun = []), Module.preRun.push(o));
    })({
      files: [
        { filename: "/assets/blocks/ACCELEROMETER_V", start: 0, end: 313 },
        { filename: "/assets/blocks/ARCH", start: 313, end: 490 },
        { filename: "/assets/blocks/BALL", start: 490, end: 635 },
        { filename: "/assets/blocks/BOX", start: 635, end: 850 },
        { filename: "/assets/blocks/BRICKS", start: 850, end: 1033 },
        { filename: "/assets/blocks/BUTTERFLY", start: 1033, end: 2330 },
        { filename: "/assets/blocks/BUTTON", start: 2330, end: 2853 },
        { filename: "/assets/blocks/BUTTON_B", start: 2853, end: 3738 },
        { filename: "/assets/blocks/CAMERA_ORBIT", start: 3738, end: 5126 },
        { filename: "/assets/blocks/COMMENT", start: 5126, end: 5240 },
        {
          filename: "/assets/blocks/CpF_LIST_ELEMENT_Cp",
          start: 5240,
          end: 5606,
        },
        { filename: "/assets/blocks/DASH_CAT", start: 5606, end: 7471 },
        { filename: "/assets/blocks/DINO", start: 7471, end: 12090 },
        { filename: "/assets/blocks/DINO_RED", start: 12090, end: 13825 },
        { filename: "/assets/blocks/DIRT", start: 13825, end: 13918 },
        { filename: "/assets/blocks/DIRT_B", start: 13918, end: 14097 },
        { filename: "/assets/blocks/DIRT_SLAB", start: 14097, end: 14219 },
        { filename: "/assets/blocks/ECpC_SET_VAR_E", start: 14219, end: 14596 },
        {
          filename: "/assets/blocks/ECVV_SET_ANG_LIMITS_E",
          start: 14596,
          end: 15053,
        },
        {
          filename: "/assets/blocks/ECVV_SET_ANG_MOTOR_E",
          start: 15053,
          end: 15508,
        },
        {
          filename: "/assets/blocks/ECVV_SET_ANG_SPRING_E",
          start: 15508,
          end: 15963,
        },
        {
          filename: "/assets/blocks/ECVV_SET_LIN_LIMITS_E",
          start: 15963,
          end: 16418,
        },
        {
          filename: "/assets/blocks/ECVV_SET_LIN_MOTOR_E",
          start: 16418,
          end: 16874,
        },
        {
          filename: "/assets/blocks/ECVV_SET_LIN_SPRING_E",
          start: 16874,
          end: 17324,
        },
        { filename: "/assets/blocks/EC_SET_VAR_E", start: 17324, end: 17579 },
        {
          filename: "/assets/blocks/EFFF_VOLUME_PITCH_E",
          start: 17579,
          end: 18022,
        },
        { filename: "/assets/blocks/EFF_LOOP_EFE", start: 18022, end: 18392 },
        {
          filename: "/assets/blocks/EFF_SET_SCORE_E",
          start: 18392,
          end: 18776,
        },
        {
          filename: "/assets/blocks/EFF_SFX_PLAY_FE",
          start: 18776,
          end: 19158,
        },
        { filename: "/assets/blocks/EFpF_SET_VAR_E", start: 19158, end: 19532 },
        {
          filename: "/assets/blocks/EFpO_MENU_ITEM_E",
          start: 19532,
          end: 19904,
        },
        { filename: "/assets/blocks/EFp_DEC_VAR_E", start: 19904, end: 20170 },
        { filename: "/assets/blocks/EFp_INC_VAR_E", start: 20170, end: 20442 },
        { filename: "/assets/blocks/EF_INSPECT_E", start: 20442, end: 20791 },
        {
          filename: "/assets/blocks/EF_RANDOM_SEED_E",
          start: 20791,
          end: 21179,
        },
        { filename: "/assets/blocks/EF_SET_VAR_E", start: 21179, end: 21430 },
        { filename: "/assets/blocks/EF_SFX_STOP_E", start: 21430, end: 21806 },
        {
          filename: "/assets/blocks/EOF_SET_BOUNCE_E",
          start: 21806,
          end: 22198,
        },
        {
          filename: "/assets/blocks/EOF_SET_FRICTION_E",
          start: 22198,
          end: 22594,
        },
        { filename: "/assets/blocks/EOF_SET_MASS_E", start: 22594, end: 22977 },
        {
          filename: "/assets/blocks/EOOV_ADD_CONSTRAINT_EC",
          start: 22977,
          end: 23428,
        },
        { filename: "/assets/blocks/EOpO_SET_VAR_E", start: 23428, end: 23802 },
        {
          filename: "/assets/blocks/EOT_SET_VISIBLE_E",
          start: 23802,
          end: 24180,
        },
        { filename: "/assets/blocks/EOVQ_SET_POS_E", start: 24180, end: 24642 },
        {
          filename: "/assets/blocks/EOVVV_ADD_FORCE_E",
          start: 24642,
          end: 25155,
        },
        {
          filename: "/assets/blocks/EOVV_SET_LOCKED_E",
          start: 25155,
          end: 25617,
        },
        { filename: "/assets/blocks/EOVV_SET_VEL_E", start: 25617, end: 26075 },
        {
          filename: "/assets/blocks/EO_COLLISION_EOFVE",
          start: 26075,
          end: 26596,
        },
        { filename: "/assets/blocks/EO_CREATE_EO", start: 26596, end: 26972 },
        { filename: "/assets/blocks/EO_DESTROY_E", start: 26972, end: 27349 },
        { filename: "/assets/blocks/EO_INSPECT_E", start: 27349, end: 27697 },
        { filename: "/assets/blocks/EO_SET_VAR_E", start: 27697, end: 27948 },
        { filename: "/assets/blocks/EQpQ_SET_VAR_E", start: 27948, end: 28324 },
        { filename: "/assets/blocks/EQ_INSPECT_E", start: 28324, end: 28675 },
        { filename: "/assets/blocks/EQ_SET_VAR_E", start: 28675, end: 28928 },
        { filename: "/assets/blocks/ETpT_SET_VAR_E", start: 28928, end: 29302 },
        { filename: "/assets/blocks/ET_IF_EEE", start: 29302, end: 29666 },
        { filename: "/assets/blocks/ET_INSPECT_E", start: 29666, end: 30015 },
        { filename: "/assets/blocks/ET_SET_VAR_E", start: 30015, end: 30265 },
        { filename: "/assets/blocks/EVpV_SET_VAR_E", start: 30265, end: 30640 },
        { filename: "/assets/blocks/EVQF_SET_CAM_E", start: 30640, end: 31090 },
        { filename: "/assets/blocks/EVQ_SET_LIT_E", start: 31090, end: 31487 },
        { filename: "/assets/blocks/EV_INSPECT_E", start: 31487, end: 31835 },
        {
          filename: "/assets/blocks/EV_SET_GRAVITY_E",
          start: 31835,
          end: 32214,
        },
        { filename: "/assets/blocks/EV_SET_VAR_E", start: 32214, end: 32466 },
        {
          filename: "/assets/blocks/E_BUT_SENSOR_EE",
          start: 32466,
          end: 32836,
        },
        {
          filename: "/assets/blocks/E_JOY_SENSOR_VE",
          start: 32836,
          end: 33198,
        },
        {
          filename: "/assets/blocks/E_LATE_UPDATE_EE",
          start: 33198,
          end: 33563,
        },
        { filename: "/assets/blocks/E_LOSE_E", start: 33563, end: 33936 },
        { filename: "/assets/blocks/E_PLAY_EE", start: 33936, end: 34298 },
        {
          filename: "/assets/blocks/E_SCREENSHOT_EE",
          start: 34298,
          end: 34687,
        },
        { filename: "/assets/blocks/E_SWIPE_EVE", start: 34687, end: 35059 },
        { filename: "/assets/blocks/E_TOUCH_EFFE", start: 35059, end: 35494 },
        { filename: "/assets/blocks/E_WIN_E", start: 35494, end: 35871 },
        { filename: "/assets/blocks/FALSE_T", start: 35871, end: 36118 },
        { filename: "/assets/blocks/FFF_EULER_Q", start: 36118, end: 36507 },
        { filename: "/assets/blocks/FFF_JOIN_V", start: 36507, end: 36894 },
        { filename: "/assets/blocks/FF_ADD_F", start: 36894, end: 37193 },
        { filename: "/assets/blocks/FF_DIV_F", start: 37193, end: 37487 },
        { filename: "/assets/blocks/FF_EQL_T", start: 37487, end: 37788 },
        { filename: "/assets/blocks/FF_GT_T", start: 37788, end: 38097 },
        { filename: "/assets/blocks/FF_LOG_F", start: 38097, end: 38413 },
        { filename: "/assets/blocks/FF_LT_T", start: 38413, end: 38720 },
        { filename: "/assets/blocks/FF_MAX_F", start: 38720, end: 39025 },
        { filename: "/assets/blocks/FF_MIN_F", start: 39025, end: 39331 },
        { filename: "/assets/blocks/FF_MOD_F", start: 39331, end: 39625 },
        { filename: "/assets/blocks/FF_MUL_F", start: 39625, end: 39930 },
        { filename: "/assets/blocks/FF_POW_F", start: 39930, end: 40229 },
        { filename: "/assets/blocks/FF_RANDOM_F", start: 40229, end: 40545 },
        { filename: "/assets/blocks/FF_S2W_VV", start: 40545, end: 40876 },
        { filename: "/assets/blocks/FF_SUB_F", start: 40876, end: 41174 },
        { filename: "/assets/blocks/FLOWERS", start: 41174, end: 41311 },
        { filename: "/assets/blocks/FOLDER_EMPTY", start: 41311, end: 41451 },
        { filename: "/assets/blocks/FOLDER_LOCKED", start: 41451, end: 41644 },
        { filename: "/assets/blocks/FOLDER_UNKNOWN", start: 41644, end: 41809 },
        { filename: "/assets/blocks/FOLIAGE", start: 41809, end: 41901 },
        { filename: "/assets/blocks/FOLIAGE_B", start: 41901, end: 42076 },
        { filename: "/assets/blocks/FOLIAGE_BOT", start: 42076, end: 42209 },
        { filename: "/assets/blocks/FOLIAGE_SLAB", start: 42209, end: 42370 },
        { filename: "/assets/blocks/FOLIAGE_TOP", start: 42370, end: 42499 },
        {
          filename: "/assets/blocks/FpF_LIST_ELEMENT_Fp",
          start: 42499,
          end: 42861,
        },
        { filename: "/assets/blocks/FRAME_F", start: 42861, end: 43071 },
        { filename: "/assets/blocks/F_ABS_F", start: 43071, end: 43288 },
        { filename: "/assets/blocks/F_CEIL_F", start: 43288, end: 43506 },
        { filename: "/assets/blocks/F_COS_F", start: 43506, end: 43724 },
        { filename: "/assets/blocks/F_FLOOR_F", start: 43724, end: 43945 },
        { filename: "/assets/blocks/F_NEG_F", start: 43945, end: 44158 },
        { filename: "/assets/blocks/F_ROUND_F", start: 44158, end: 44378 },
        { filename: "/assets/blocks/F_SIN_F", start: 44378, end: 44600 },
        { filename: "/assets/blocks/GOAL", start: 44600, end: 45039 },
        { filename: "/assets/blocks/GRASS_A", start: 45039, end: 45182 },
        { filename: "/assets/blocks/GRASS_B", start: 45182, end: 45344 },
        { filename: "/assets/blocks/IO", start: 45344, end: 45448 },
        { filename: "/assets/blocks/L2R", start: 45448, end: 45556 },
        { filename: "/assets/blocks/MARKER", start: 45556, end: 45669 },
        { filename: "/assets/blocks/MOTOR_X", start: 45669, end: 46300 },
        { filename: "/assets/blocks/MOTOR_Y", start: 46300, end: 47157 },
        { filename: "/assets/blocks/MOTOR_Z", start: 47157, end: 47814 },
        { filename: "/assets/blocks/MULTI_IN", start: 47814, end: 47923 },
        { filename: "/assets/blocks/MULTI_IN_E", start: 47923, end: 48036 },
        { filename: "/assets/blocks/MULTI_OUT", start: 48036, end: 48148 },
        { filename: "/assets/blocks/MULTI_OUT_E", start: 48148, end: 48263 },
        { filename: "/assets/blocks/NONE", start: 48263, end: 48473 },
        { filename: "/assets/blocks/NUMBER_F", start: 48473, end: 48722 },
        { filename: "/assets/blocks/OBSTACLE", start: 48722, end: 48850 },
        { filename: "/assets/blocks/OO_EQL_T", start: 48850, end: 49153 },
        {
          filename: "/assets/blocks/OpF_LIST_ELEMENT_Op",
          start: 49153,
          end: 49514,
        },
        { filename: "/assets/blocks/O_GET_POS_VQ", start: 49514, end: 49848 },
        { filename: "/assets/blocks/O_GET_SIZE_VV", start: 49848, end: 50172 },
        { filename: "/assets/blocks/O_GET_VEL_VV", start: 50172, end: 50504 },
        { filename: "/assets/blocks/PARTICLE", start: 50504, end: 50616 },
        { filename: "/assets/blocks/PASS_THROUGH", start: 50616, end: 50740 },
        {
          filename: "/assets/blocks/QpF_LIST_ELEMENT_Qp",
          start: 50740,
          end: 51104,
        },
        { filename: "/assets/blocks/QQF_LERP_Q", start: 51104, end: 51493 },
        { filename: "/assets/blocks/QQ_MUL_Q", start: 51493, end: 51796 },
        { filename: "/assets/blocks/QUATERNION_Q", start: 51796, end: 52141 },
        { filename: "/assets/blocks/Q_EULER_FFF", start: 52141, end: 52530 },
        { filename: "/assets/blocks/Q_INV_Q", start: 52530, end: 52745 },
        { filename: "/assets/blocks/SCREEN_SIZE_FF", start: 52745, end: 53060 },
        { filename: "/assets/blocks/SCRIPT", start: 53060, end: 53206 },
        { filename: "/assets/blocks/SFX_Fp", start: 53206, end: 53528 },
        { filename: "/assets/blocks/SHRUB", start: 53528, end: 53727 },
        { filename: "/assets/blocks/SLATE", start: 53727, end: 53821 },
        { filename: "/assets/blocks/SLATE_B", start: 53821, end: 54026 },
        { filename: "/assets/blocks/SLATE_BOT", start: 54026, end: 54164 },
        { filename: "/assets/blocks/SLATE_NE", start: 54164, end: 54277 },
        { filename: "/assets/blocks/SLATE_NW", start: 54277, end: 54397 },
        { filename: "/assets/blocks/SLATE_SE", start: 54397, end: 54513 },
        { filename: "/assets/blocks/SLATE_SW", start: 54513, end: 54633 },
        { filename: "/assets/blocks/SLATE_TOP", start: 54633, end: 54757 },
        { filename: "/assets/blocks/SLIDER", start: 54757, end: 56659 },
        { filename: "/assets/blocks/SLIDER_X", start: 56659, end: 56939 },
        { filename: "/assets/blocks/SLIDER_Y", start: 56939, end: 57260 },
        { filename: "/assets/blocks/SLIDER_Z", start: 57260, end: 57558 },
        { filename: "/assets/blocks/SPHERE", start: 57558, end: 57698 },
        { filename: "/assets/blocks/STEEL", start: 57698, end: 57838 },
        { filename: "/assets/blocks/STICK_DE", start: 57838, end: 57989 },
        { filename: "/assets/blocks/STICK_DN", start: 57989, end: 58141 },
        { filename: "/assets/blocks/STICK_DS", start: 58141, end: 58298 },
        { filename: "/assets/blocks/STICK_DW", start: 58298, end: 58456 },
        { filename: "/assets/blocks/STICK_NE", start: 58456, end: 58610 },
        { filename: "/assets/blocks/STICK_NW", start: 58610, end: 58773 },
        { filename: "/assets/blocks/STICK_SE", start: 58773, end: 58930 },
        { filename: "/assets/blocks/STICK_SW", start: 58930, end: 59090 },
        { filename: "/assets/blocks/STICK_UE", start: 59090, end: 59244 },
        { filename: "/assets/blocks/STICK_UN", start: 59244, end: 59414 },
        { filename: "/assets/blocks/STICK_US", start: 59414, end: 59571 },
        { filename: "/assets/blocks/STICK_UW", start: 59571, end: 59726 },
        { filename: "/assets/blocks/STICK_X", start: 59726, end: 59868 },
        { filename: "/assets/blocks/STICK_Y", start: 59868, end: 60017 },
        { filename: "/assets/blocks/STICK_Z", start: 60017, end: 60155 },
        { filename: "/assets/blocks/STONE", start: 60155, end: 60249 },
        { filename: "/assets/blocks/STONE_B", start: 60249, end: 60426 },
        { filename: "/assets/blocks/STONE_BLOCK", start: 60426, end: 60624 },
        { filename: "/assets/blocks/STONE_BOT", start: 60624, end: 60762 },
        { filename: "/assets/blocks/STONE_LOWER", start: 60762, end: 60903 },
        { filename: "/assets/blocks/STONE_PILLAR", start: 60903, end: 61058 },
        { filename: "/assets/blocks/STONE_SLAB", start: 61058, end: 61206 },
        { filename: "/assets/blocks/STONE_TOP", start: 61206, end: 61331 },
        { filename: "/assets/blocks/SWIPE_CHICK", start: 61331, end: 64108 },
        { filename: "/assets/blocks/THIS_O", start: 64108, end: 64223 },
        { filename: "/assets/blocks/TILT_BALL", start: 64223, end: 64470 },
        {
          filename: "/assets/blocks/TpF_LIST_ELEMENT_Tp",
          start: 64470,
          end: 64832,
        },
        { filename: "/assets/blocks/TRUE_T", start: 64832, end: 65078 },
        { filename: "/assets/blocks/TT_AND_T", start: 65078, end: 65371 },
        { filename: "/assets/blocks/TT_EQL_T", start: 65371, end: 65672 },
        { filename: "/assets/blocks/TT_OR_T", start: 65672, end: 65963 },
        { filename: "/assets/blocks/T_NOT_T", start: 65963, end: 66177 },
        { filename: "/assets/blocks/VAR_Cp", start: 66177, end: 66430 },
        { filename: "/assets/blocks/VAR_Fp", start: 66430, end: 66679 },
        { filename: "/assets/blocks/VAR_Op", start: 66679, end: 66929 },
        { filename: "/assets/blocks/VAR_Qp", start: 66929, end: 67181 },
        { filename: "/assets/blocks/VAR_Tp", start: 67181, end: 67431 },
        { filename: "/assets/blocks/VAR_Vp", start: 67431, end: 67681 },
        { filename: "/assets/blocks/VECTOR_V", start: 67681, end: 68024 },
        { filename: "/assets/blocks/VF_AXIS_ANG_Q", start: 68024, end: 68349 },
        { filename: "/assets/blocks/VF_MUL_V", start: 68349, end: 68650 },
        {
          filename: "/assets/blocks/VpF_LIST_ELEMENT_Vp",
          start: 68650,
          end: 69013,
        },
        { filename: "/assets/blocks/VQ_MUL_V", start: 69013, end: 69315 },
        {
          filename: "/assets/blocks/VVVV_LINE_VS_PLANE_V",
          start: 69315,
          end: 69760,
        },
        { filename: "/assets/blocks/VV_ADD_V", start: 69760, end: 70059 },
        { filename: "/assets/blocks/VV_CROSS_V", start: 70059, end: 70364 },
        { filename: "/assets/blocks/VV_DIST_F", start: 70364, end: 70663 },
        { filename: "/assets/blocks/VV_DOT_F", start: 70663, end: 70976 },
        { filename: "/assets/blocks/VV_EQL_T", start: 70976, end: 71278 },
        { filename: "/assets/blocks/VV_LOOK_ROT_Q", start: 71278, end: 71605 },
        { filename: "/assets/blocks/VV_RAYCAST_TVO", start: 71605, end: 71990 },
        { filename: "/assets/blocks/VV_SUB_V", start: 71990, end: 72288 },
        { filename: "/assets/blocks/V_NORMALIZE_V", start: 72288, end: 72512 },
        { filename: "/assets/blocks/V_SPLIT_FFF", start: 72512, end: 72898 },
        { filename: "/assets/blocks/V_W2S_FF", start: 72898, end: 73230 },
        { filename: "/assets/blocks/WHEEL", start: 73230, end: 74971 },
        { filename: "/assets/blocks/WOOD_LOWER_X", start: 74971, end: 75162 },
        { filename: "/assets/blocks/WOOD_LOWER_Z", start: 75162, end: 75352 },
        { filename: "/assets/blocks/WOOD_UPPER_X", start: 75352, end: 75543 },
        { filename: "/assets/blocks/WOOD_UPPER_Z", start: 75543, end: 75733 },
        { filename: "/assets/blocks/WOOD_X", start: 75733, end: 75908 },
        { filename: "/assets/blocks/WOOD_Y", start: 75908, end: 76098 },
        { filename: "/assets/blocks/WOOD_Z", start: 76098, end: 76269 },
        { filename: "/assets/views/baloo2.woff", start: 76269, end: 100341 },
        {
          filename: "/assets/views/block_settings.html",
          start: 100341,
          end: 102406,
        },
        { filename: "/assets/views/common.css", start: 102406, end: 107999 },
        { filename: "/assets/views/common.js", start: 107999, end: 115919 },
        {
          filename: "/assets/views/confirm_deletion.html",
          start: 115919,
          end: 118288,
        },
        {
          filename: "/assets/views/create_user.html",
          start: 118288,
          end: 120516,
        },
        {
          filename: "/assets/views/game_moderation.html",
          start: 120516,
          end: 125184,
        },
        {
          filename: "/assets/views/messagebox.html",
          start: 125184,
          end: 127300,
        },
        {
          filename: "/assets/views/select_level.html",
          start: 127300,
          end: 140074,
        },
        {
          filename: "/assets/views/show_hint.html",
          start: 140074,
          end: 141571,
        },
        { filename: "/assets/views/sign_in.html", start: 141571, end: 144029 },
        { filename: "/assets/atlas.png", start: 144029, end: 395576 },
        { filename: "/assets/db", start: 395576, end: 395818 },
        { filename: "/assets/games/menu", start: 395818, end: 401413 },
        {
          filename: "/assets/games/5E9F40DA7F9C9FA8",
          start: 401413,
          end: 429716,
        },
        { filename: "/bundle_games.txt", start: 429716, end: 429732 },
        {
          filename: "/assets/sounds/240566_screenshot_done.wav",
          start: 429732,
          end: 433886,
          audio: 1,
        },
        {
          filename: "/assets/sounds/319154_block_open.wav",
          start: 433886,
          end: 443408,
          audio: 1,
        },
        {
          filename: "/assets/sounds/36837_engine_no_click.wav",
          start: 443408,
          end: 455446,
          audio: 1,
        },
        {
          filename: "/assets/sounds/78937_squeek.wav",
          start: 455446,
          end: 465556,
          audio: 1,
        },
        {
          filename: "/assets/sounds/378355_ball.wav",
          start: 465556,
          end: 473722,
          audio: 1,
        },
        {
          filename: "/assets/sounds/249929_splash1.wav",
          start: 473722,
          end: 485426,
          audio: 1,
        },
        {
          filename: "/assets/sounds/315935_bang.wav",
          start: 485426,
          end: 537936,
          audio: 1,
        },
        {
          filename: "/assets/sounds/floor6.wav",
          start: 537936,
          end: 568960,
          audio: 1,
        },
        {
          filename: "/assets/sounds/125404_clang.wav",
          start: 568960,
          end: 582032,
          audio: 1,
        },
        {
          filename: "/assets/sounds/399095_jump.wav",
          start: 582032,
          end: 587410,
          audio: 1,
        },
        {
          filename: "/assets/sounds/521481_camera.wav",
          start: 587410,
          end: 602842,
          audio: 1,
        },
        {
          filename: "/assets/sounds/194795_ui_button.wav",
          start: 602842,
          end: 604944,
          audio: 1,
        },
        {
          filename: "/assets/sounds/146721_ui_beep.wav",
          start: 604944,
          end: 609446,
          audio: 1,
        },
        {
          filename: "/assets/sounds/chaching.wav",
          start: 609446,
          end: 658726,
          audio: 1,
        },
        {
          filename: "/assets/sounds/363090_coin.wav",
          start: 658726,
          end: 663484,
          audio: 1,
        },
        {
          filename: "/assets/sounds/coin02_band.wav",
          start: 663484,
          end: 675468,
          audio: 1,
        },
        {
          filename: "/assets/sounds/error1.wav",
          start: 675468,
          end: 696728,
          audio: 1,
        },
      ],
      remote_package_size: 696728,
    });
var read_,
  readAsync,
  readBinary,
  setWindowTitle,
  fs,
  nodePath,
  requireNodeFS,
  moduleOverrides = Object.assign({}, Module),
  arguments_ = [],
  thisProgram = "./this.program",
  quit_ = (e, t) => {
    throw t;
  },
  ENVIRONMENT_IS_WEB = "object" == typeof window,
  ENVIRONMENT_IS_WORKER = "function" == typeof importScripts,
  ENVIRONMENT_IS_NODE =
    "object" == typeof process &&
    "object" == typeof process.versions &&
    "string" == typeof process.versions.node,
  scriptDirectory = "";
function locateFile(e) {
  return Module.locateFile
    ? Module.locateFile(e, scriptDirectory)
    : scriptDirectory + e;
}
function logExceptionOnExit(e) {
  e instanceof ExitStatus || err("exiting due to exception: " + e);
}
ENVIRONMENT_IS_NODE
  ? ((scriptDirectory = ENVIRONMENT_IS_WORKER
      ? require("path").dirname(scriptDirectory) + "/"
      : __dirname + "/"),
    (requireNodeFS = () => {
      nodePath || ((fs = require("fs")), (nodePath = require("path")));
    }),
    (read_ = function (e, t) {
      return (
        requireNodeFS(),
        (e = nodePath.normalize(e)),
        fs.readFileSync(e, t ? void 0 : "utf8")
      );
    }),
    (readBinary = (e) => {
      e = read_(e, !0);
      return e.buffer || (e = new Uint8Array(e)), e;
    }),
    (readAsync = (e, n, r) => {
      requireNodeFS(),
        (e = nodePath.normalize(e)),
        fs.readFile(e, function (e, t) {
          e ? r(e) : n(t.buffer);
        });
    }),
    1 < process.argv.length &&
      (thisProgram = process.argv[1].replace(/\\/g, "/")),
    (arguments_ = process.argv.slice(2)),
    "undefined" != typeof module && (module.exports = Module),
    process.on("uncaughtException", function (e) {
      if (!(e instanceof ExitStatus)) throw e;
    }),
    process.on("unhandledRejection", function (e) {
      throw e;
    }),
    (quit_ = (e, t) => {
      if (keepRuntimeAlive()) throw ((process.exitCode = e), t);
      logExceptionOnExit(t), process.exit(e);
    }),
    (Module.inspect = function () {
      return "[Emscripten Module object]";
    }))
  : (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
    (ENVIRONMENT_IS_WORKER
      ? (scriptDirectory = self.location.href)
      : "undefined" != typeof document &&
        document.currentScript &&
        (scriptDirectory = document.currentScript.src),
    (scriptDirectory =
      0 !== scriptDirectory.indexOf("blob:")
        ? scriptDirectory.substr(
            0,
            scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
          )
        : ""),
    (read_ = (e) => {
      var t = new XMLHttpRequest();
      return t.open("GET", e, !1), t.send(null), t.responseText;
    }),
    ENVIRONMENT_IS_WORKER &&
      (readBinary = (e) => {
        var t = new XMLHttpRequest();
        return (
          t.open("GET", e, !1),
          (t.responseType = "arraybuffer"),
          t.send(null),
          new Uint8Array(t.response)
        );
      }),
    (readAsync = (e, t, n) => {
      var r = new XMLHttpRequest();
      r.open("GET", e, !0),
        (r.responseType = "arraybuffer"),
        (r.onload = () => {
          200 == r.status || (0 == r.status && r.response)
            ? t(r.response)
            : n();
        }),
        (r.onerror = n),
        r.send(null);
    }),
    (setWindowTitle = (e) => (document.title = e)));
var wasmBinary,
  out = Module.print || console.log.bind(console),
  err = Module.printErr || console.warn.bind(console);
function warnOnce(e) {
  warnOnce.shown || (warnOnce.shown = {}),
    warnOnce.shown[e] || ((warnOnce.shown[e] = 1), err(e));
}
Object.assign(Module, moduleOverrides),
  (moduleOverrides = null),
  Module.arguments && (arguments_ = Module.arguments),
  Module.thisProgram && (thisProgram = Module.thisProgram),
  Module.quit && (quit_ = Module.quit),
  Module.wasmBinary && (wasmBinary = Module.wasmBinary);
var wasmMemory,
  noExitRuntime = Module.noExitRuntime || !0;
"object" != typeof WebAssembly && abort("no native wasm support detected");
var EXITSTATUS,
  ABORT = !1;
function assert(e, t) {
  e || abort(t);
}
function getCFunc(e) {
  return Module["_" + e];
}
function ccall(e, t, n, r, o) {
  var a = {
    string: function (e) {
      var t,
        n = 0;
      return (
        null != e &&
          0 !== e &&
          ((t = 1 + (e.length << 2)), stringToUTF8(e, (n = stackAlloc(t)), t)),
        n
      );
    },
    array: function (e) {
      var t = stackAlloc(e.length);
      return writeArrayToMemory(e, t), t;
    },
  };
  var e = getCFunc(e),
    s = [],
    i = 0;
  if (r)
    for (var u = 0; u < r.length; u++) {
      var l = a[n[u]];
      l ? (0 === i && (i = stackSave()), (s[u] = l(r[u]))) : (s[u] = r[u]);
    }
  var d,
    e = e.apply(null, s);
  return (
    (d = e),
    0 !== i && stackRestore(i),
    (d = d),
    (e = "string" === t ? UTF8ToString(d) : "boolean" === t ? Boolean(d) : d)
  );
}
function cwrap(e, t, n, r) {
  var o = (n = n || []).every(function (e) {
    return "number" === e;
  });
  return "string" !== t && o && !r
    ? getCFunc(e)
    : function () {
        return ccall(e, t, n, arguments, r);
      };
}
var buffer,
  HEAP8,
  HEAPU8,
  HEAP16,
  HEAPU16,
  HEAP32,
  HEAPU32,
  HEAPF32,
  HEAPF64,
  UTF8Decoder =
    "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function UTF8ArrayToString(e, t, n) {
  for (var r = t + n, o = t; e[o] && !(r <= o); ) ++o;
  if (16 < o - t && e.buffer && UTF8Decoder)
    return UTF8Decoder.decode(e.subarray(t, o));
  for (var a = ""; t < o; ) {
    var s,
      i,
      u = e[t++];
    128 & u
      ? ((s = 63 & e[t++]),
        192 != (224 & u)
          ? ((i = 63 & e[t++]),
            (u =
              224 == (240 & u)
                ? ((15 & u) << 12) | (s << 6) | i
                : ((7 & u) << 18) | (s << 12) | (i << 6) | (63 & e[t++])) <
            65536
              ? (a += String.fromCharCode(u))
              : ((i = u - 65536),
                (a += String.fromCharCode(
                  55296 | (i >> 10),
                  56320 | (1023 & i)
                ))))
          : (a += String.fromCharCode(((31 & u) << 6) | s)))
      : (a += String.fromCharCode(u));
  }
  return a;
}
function UTF8ToString(e, t) {
  return e ? UTF8ArrayToString(HEAPU8, e, t) : "";
}
function stringToUTF8Array(e, t, n, r) {
  if (!(0 < r)) return 0;
  for (var o = n, a = n + r - 1, s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (
      (55296 <= i &&
        i <= 57343 &&
        (i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++s))),
      i <= 127)
    ) {
      if (a <= n) break;
      t[n++] = i;
    } else if (i <= 2047) {
      if (a <= n + 1) break;
      (t[n++] = 192 | (i >> 6)), (t[n++] = 128 | (63 & i));
    } else if (i <= 65535) {
      if (a <= n + 2) break;
      (t[n++] = 224 | (i >> 12)),
        (t[n++] = 128 | ((i >> 6) & 63)),
        (t[n++] = 128 | (63 & i));
    } else {
      if (a <= n + 3) break;
      (t[n++] = 240 | (i >> 18)),
        (t[n++] = 128 | ((i >> 12) & 63)),
        (t[n++] = 128 | ((i >> 6) & 63)),
        (t[n++] = 128 | (63 & i));
    }
  }
  return (t[n] = 0), n - o;
}
function stringToUTF8(e, t, n) {
  return stringToUTF8Array(e, HEAPU8, t, n);
}
function lengthBytesUTF8(e) {
  for (var t = 0, n = 0; n < e.length; ++n) {
    var r = e.charCodeAt(n);
    55296 <= r &&
      r <= 57343 &&
      (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))),
      r <= 127 ? ++t : (t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4);
  }
  return t;
}
function allocateUTF8(e) {
  var t = lengthBytesUTF8(e) + 1,
    n = _malloc(t);
  return n && stringToUTF8Array(e, HEAP8, n, t), n;
}
function allocateUTF8OnStack(e) {
  var t = lengthBytesUTF8(e) + 1,
    n = stackAlloc(t);
  return stringToUTF8Array(e, HEAP8, n, t), n;
}
function writeArrayToMemory(e, t) {
  HEAP8.set(e, t);
}
function updateGlobalBufferAndViews(e) {
  (buffer = e),
    (Module.HEAP8 = HEAP8 = new Int8Array(e)),
    (Module.HEAP16 = HEAP16 = new Int16Array(e)),
    (Module.HEAP32 = HEAP32 = new Int32Array(e)),
    (Module.HEAPU8 = HEAPU8 = new Uint8Array(e)),
    (Module.HEAPU16 = HEAPU16 = new Uint16Array(e)),
    (Module.HEAPU32 = HEAPU32 = new Uint32Array(e)),
    (Module.HEAPF32 = HEAPF32 = new Float32Array(e)),
    (Module.HEAPF64 = HEAPF64 = new Float64Array(e));
}
var wasmTable,
  INITIAL_MEMORY = Module.INITIAL_MEMORY || 33554432,
  __ATPRERUN__ = [],
  __ATINIT__ = [],
  __ATMAIN__ = [],
  __ATEXIT__ = [],
  __ATPOSTRUN__ = [],
  runtimeInitialized = !1;
function keepRuntimeAlive() {
  return noExitRuntime;
}
function preRun() {
  if (Module.preRun)
    for (
      "function" == typeof Module.preRun && (Module.preRun = [Module.preRun]);
      Module.preRun.length;

    )
      addOnPreRun(Module.preRun.shift());
  callRuntimeCallbacks(__ATPRERUN__);
}
function initRuntime() {
  (runtimeInitialized = !0),
    Module.noFSInit || FS.init.initialized || FS.init(),
    (FS.ignorePermissions = !1),
    TTY.init(),
    callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function postRun() {
  if (Module.postRun)
    for (
      "function" == typeof Module.postRun &&
      (Module.postRun = [Module.postRun]);
      Module.postRun.length;

    )
      addOnPostRun(Module.postRun.shift());
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(e) {
  __ATPRERUN__.unshift(e);
}
function addOnInit(e) {
  __ATINIT__.unshift(e);
}
function addOnPostRun(e) {
  __ATPOSTRUN__.unshift(e);
}
var runDependencies = 0,
  runDependencyWatcher = null,
  dependenciesFulfilled = null;
function getUniqueRunDependency(e) {
  return e;
}
function addRunDependency(e) {
  runDependencies++,
    Module.monitorRunDependencies &&
      Module.monitorRunDependencies(runDependencies);
}
function removeRunDependency(e) {
  var t;
  runDependencies--,
    Module.monitorRunDependencies &&
      Module.monitorRunDependencies(runDependencies),
    0 == runDependencies &&
      (null !== runDependencyWatcher &&
        (clearInterval(runDependencyWatcher), (runDependencyWatcher = null)),
      dependenciesFulfilled &&
        ((t = dependenciesFulfilled), (dependenciesFulfilled = null), t()));
}
function abort(e) {
  throw (
    (Module.onAbort && Module.onAbort(e),
    err((e = "Aborted(" + e + ")")),
    (ABORT = !0),
    (EXITSTATUS = 1),
    (e += ". Build with -sASSERTIONS for more info."),
    new WebAssembly.RuntimeError(e))
  );
}
var wasmBinaryFile,
  tempDouble,
  tempI64,
  dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(e) {
  return e.startsWith(dataURIPrefix);
}
function isFileURI(e) {
  return e.startsWith("file://");
}
function getBinary(e) {
  try {
    if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
    if (readBinary) return readBinary(e);
    throw "both async and sync fetching of the wasm failed";
  } catch (e) {
    abort(e);
  }
}
function getBinaryPromise() {
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if ("function" == typeof fetch && !isFileURI(wasmBinaryFile))
      return fetch(wasmBinaryFile, { credentials: "same-origin" })
        .then(function (e) {
          if (!e.ok)
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          return e.arrayBuffer();
        })
        .catch(function () {
          return getBinary(wasmBinaryFile);
        });
    if (readAsync)
      return new Promise(function (t, e) {
        readAsync(
          wasmBinaryFile,
          function (e) {
            t(new Uint8Array(e));
          },
          e
        );
      });
  }
  return Promise.resolve().then(function () {
    return getBinary(wasmBinaryFile);
  });
}
function createWasm() {
  var t = { a: asmLibraryArg };
  function n(e, t) {
    e = e.exports;
    (Module.asm = e),
      updateGlobalBufferAndViews((wasmMemory = Module.asm.nb).buffer),
      (wasmTable = Module.asm.Ub),
      addOnInit(Module.asm.ob),
      removeRunDependency("wasm-instantiate");
  }
  function r(e) {
    n(e.instance);
  }
  function o(e) {
    return getBinaryPromise()
      .then(function (e) {
        return WebAssembly.instantiate(e, t);
      })
      .then(function (e) {
        return e;
      })
      .then(e, function (e) {
        err("failed to asynchronously prepare wasm: " + e), abort(e);
      });
  }
  if ((addRunDependency("wasm-instantiate"), Module.instantiateWasm))
    try {
      return Module.instantiateWasm(t, n);
    } catch (e) {
      return err("Module.instantiateWasm callback failed with error: " + e), !1;
    }
  return (
    wasmBinary ||
    "function" != typeof WebAssembly.instantiateStreaming ||
    isDataURI(wasmBinaryFile) ||
    isFileURI(wasmBinaryFile) ||
    ENVIRONMENT_IS_NODE ||
    "function" != typeof fetch
      ? o(r)
      : fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (
          e
        ) {
          return WebAssembly.instantiateStreaming(e, t).then(r, function (e) {
            return (
              err("wasm streaming compile failed: " + e),
              err("falling back to ArrayBuffer instantiation"),
              o(r)
            );
          });
        }),
    {}
  );
}
isDataURI((wasmBinaryFile = "index.wasm")) ||
  (wasmBinaryFile = locateFile(wasmBinaryFile));
var ASM_CONSTS = {
  272728: (e) => {
    downloadFileInBrowser(UTF8ToString(e));
  },
  272770: () => {
    hideOverlayGradient();
  },
  272795: (e) => {
    setDeepLinkLoadingFraction(e);
  },
  272828: (e, t) => {
    checkHintFileExist(UTF8ToString(e), t);
  },
  272872: (e, t, n) => {
    fetchUrl(UTF8ToString(e), t, n);
  },
  272909: (e) => {
    webViewOpen(UTF8ToString(e));
  },
  272942: () => {
    webViewClose();
  },
  272960: (e) => {
    webViewExecuteJS(UTF8ToString(e));
  },
  272998: () => {
    hideOverlayGradient();
  },
  273023: () => {
    "to" !== fsSyncStatus &&
      ((fsSyncStatus = "to"),
      FS.syncfs(!1, function (e) {
        e && simpleLogC("syncfs error " + e), (fsSyncStatus = "");
      }));
  },
  273184: () => {
    "from" !== fsSyncStatus &&
      ((fsSyncStatus = "from"),
      FS.syncfs(!0, function (e) {
        e && simpleLogC("syncfs error " + e), (fsSyncStatus = "");
      }));
  },
  273348: () => {
    firebaseSignout();
  },
  273369: () => {
    adInterstitialLoad();
  },
  273395: () => {
    adInterstitialShow();
  },
  273421: () => {
    adRewardedLoad();
  },
  273443: () => {
    adRewardedShow();
  },
  273465: () => {
    adInit();
  },
  273479: () => {
    adInit();
  },
  273493: (e, t, n) => {
    showShareFileModal(UTF8ToString(e), UTF8ToString(t), UTF8ToString(n));
  },
  273568: (e) => {
    window.open(UTF8ToString(e), "_blank");
  },
  273613: () => {
    location.reload();
  },
  273636: (e, t, n, r) => {
    showStoreLinkModal(UTF8ToString(e), t, n, r);
  },
  273688: () => {
    FS.mkdir("/sandbox"),
      FS.mount(IDBFS, {}, "/sandbox"),
      FS.syncfs(!0, function (e) {
        e && simpleLogC("syncfs error " + e);
        try {
          ccall("app_init", "v");
        } catch (e) {
          simpleLogC("app_init() error " + e);
        }
        hideOverlay();
      });
  },
  273934: () => document.getElementById("canvas").width,
  273984: () => document.getElementById("canvas").height,
};
function poki_level_start(e) {
  try {
    PokiSDK.customEvent("game", "segment", {
      label: "level",
      value: e.toString(),
    });
  } catch (e) {}
}
function poki_gameplay_stop() {
  pokiEnsureStop();
}
function poki_gameplay_start() {
  pokiEnsureStart();
}
function is_daily_reward_possible() {
  return dailyRewardPossible;
}
function is_latest_browser_tab() {
  try {
    return localStorage["startup-time"] == startupTimeStr;
  } catch (e) {
    return !0;
  }
}
function set_latest_browser_tab() {
  startupTimeStr = Date.now().toString();
  try {
    localStorage["startup-time"] = startupTimeStr;
  } catch (e) {}
}
function get_device_pixel_ratio() {
  return window.devicePixelRatio;
}
function get_hostname() {
  return getHostname();
}
function get_url_level_index() {
  return getUrlLevelIndex();
}
function callRuntimeCallbacks(e) {
  for (; 0 < e.length; ) e.shift()(Module);
}
function withStackSave(e) {
  var t = stackSave(),
    e = e();
  return stackRestore(t), e;
}
var wasmTableMirror = [];
function getWasmTableEntry(e) {
  var t = wasmTableMirror[e];
  return (
    t ||
      (e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1),
      (wasmTableMirror[e] = t = wasmTable.get(e))),
    t
  );
}
function handleException(e) {
  if (e instanceof ExitStatus || "unwind" == e) return EXITSTATUS;
  quit_(1, e);
}
function getRandomDevice() {
  if (
    "object" == typeof crypto &&
    "function" == typeof crypto.getRandomValues
  ) {
    var e = new Uint8Array(1);
    return function () {
      return crypto.getRandomValues(e), e[0];
    };
  }
  if (ENVIRONMENT_IS_NODE)
    try {
      var t = require("crypto");
      return function () {
        return t.randomBytes(1)[0];
      };
    } catch (e) {}
  return function () {
    abort("randomDevice");
  };
}
var PATH = {
    isAbs: (e) => "/" === e.charAt(0),
    splitPath: (e) => {
      return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
        .exec(e)
        .slice(1);
    },
    normalizeArray: (e, t) => {
      for (var n = 0, r = e.length - 1; 0 <= r; r--) {
        var o = e[r];
        "." === o
          ? e.splice(r, 1)
          : ".." === o
          ? (e.splice(r, 1), n++)
          : n && (e.splice(r, 1), n--);
      }
      if (t) for (; n; n--) e.unshift("..");
      return e;
    },
    normalize: (e) => {
      var t = PATH.isAbs(e),
        n = "/" === e.substr(-1);
      return (
        (e = PATH.normalizeArray(
          e.split("/").filter((e) => !!e),
          !t
        ).join("/")) ||
          t ||
          (e = "."),
        e && n && (e += "/"),
        (t ? "/" : "") + e
      );
    },
    dirname: (e) => {
      var t = PATH.splitPath(e),
        e = t[0],
        t = t[1];
      return e || t ? e + (t = t && t.substr(0, t.length - 1)) : ".";
    },
    basename: (e) => {
      if ("/" === e) return "/";
      var t = (e = (e = PATH.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
      return -1 === t ? e : e.substr(t + 1);
    },
    join: function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return PATH.normalize(e.join("/"));
    },
    join2: (e, t) => PATH.normalize(e + "/" + t),
  },
  PATH_FS = {
    resolve: function () {
      for (var e = "", t = !1, n = arguments.length - 1; -1 <= n && !t; n--) {
        var r = 0 <= n ? arguments[n] : FS.cwd();
        if ("string" != typeof r)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!r) return "";
        (e = r + "/" + e), (t = PATH.isAbs(r));
      }
      return (
        (t ? "/" : "") +
          (e = PATH.normalizeArray(
            e.split("/").filter((e) => !!e),
            !t
          ).join("/")) || "."
      );
    },
    relative: (e, t) => {
      function n(e) {
        for (var t = 0; t < e.length && "" === e[t]; t++);
        for (var n = e.length - 1; 0 <= n && "" === e[n]; n--);
        return n < t ? [] : e.slice(t, n - t + 1);
      }
      (e = PATH_FS.resolve(e).substr(1)), (t = PATH_FS.resolve(t).substr(1));
      for (
        var r = n(e.split("/")),
          o = n(t.split("/")),
          a = Math.min(r.length, o.length),
          s = a,
          i = 0;
        i < a;
        i++
      )
        if (r[i] !== o[i]) {
          s = i;
          break;
        }
      for (var u = [], i = s; i < r.length; i++) u.push("..");
      return (u = u.concat(o.slice(s))).join("/");
    },
  },
  TTY = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (e, t) {
      (TTY.ttys[e] = { input: [], output: [], ops: t }),
        FS.registerDevice(e, TTY.stream_ops);
    },
    stream_ops: {
      open: function (e) {
        var t = TTY.ttys[e.node.rdev];
        if (!t) throw new FS.ErrnoError(43);
        (e.tty = t), (e.seekable = !1);
      },
      close: function (e) {
        e.tty.ops.flush(e.tty);
      },
      flush: function (e) {
        e.tty.ops.flush(e.tty);
      },
      read: function (e, t, n, r, o) {
        if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
        for (var a, s = 0, i = 0; i < r; i++) {
          try {
            a = e.tty.ops.get_char(e.tty);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (void 0 === a && 0 === s) throw new FS.ErrnoError(6);
          if (null == a) break;
          s++, (t[n + i] = a);
        }
        return s && (e.node.timestamp = Date.now()), s;
      },
      write: function (e, t, n, r, o) {
        if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
        try {
          for (var a = 0; a < r; a++) e.tty.ops.put_char(e.tty, t[n + a]);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        return r && (e.node.timestamp = Date.now()), a;
      },
    },
    default_tty_ops: {
      get_char: function (e) {
        if (!e.input.length) {
          var t = null;
          if (ENVIRONMENT_IS_NODE) {
            var n = Buffer.alloc(256),
              r = 0;
            try {
              r = fs.readSync(process.stdin.fd, n, 0, 256, -1);
            } catch (e) {
              if (!e.toString().includes("EOF")) throw e;
              r = 0;
            }
            t = 0 < r ? n.slice(0, r).toString("utf-8") : null;
          } else
            "undefined" != typeof window && "function" == typeof window.prompt
              ? null !== (t = window.prompt("Input: ")) && (t += "\n")
              : "function" == typeof readline &&
                null !== (t = readline()) &&
                (t += "\n");
          if (!t) return null;
          e.input = intArrayFromString(t, !0);
        }
        return e.input.shift();
      },
      put_char: function (e, t) {
        null === t || 10 === t
          ? (out(UTF8ArrayToString(e.output, 0)), (e.output = []))
          : 0 != t && e.output.push(t);
      },
      flush: function (e) {
        e.output &&
          0 < e.output.length &&
          (out(UTF8ArrayToString(e.output, 0)), (e.output = []));
      },
    },
    default_tty1_ops: {
      put_char: function (e, t) {
        null === t || 10 === t
          ? (err(UTF8ArrayToString(e.output, 0)), (e.output = []))
          : 0 != t && e.output.push(t);
      },
      flush: function (e) {
        e.output &&
          0 < e.output.length &&
          (err(UTF8ArrayToString(e.output, 0)), (e.output = []));
      },
    },
  };
function zeroMemory(e, t) {
  HEAPU8.fill(0, e, e + t);
}
function mmapAlloc(e) {
  abort();
}
var MEMFS = {
  ops_table: null,
  mount: function (e) {
    return MEMFS.createNode(null, "/", 16895, 0);
  },
  createNode: function (e, t, n, r) {
    if (FS.isBlkdev(n) || FS.isFIFO(n)) throw new FS.ErrnoError(63);
    MEMFS.ops_table ||
      (MEMFS.ops_table = {
        dir: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            lookup: MEMFS.node_ops.lookup,
            mknod: MEMFS.node_ops.mknod,
            rename: MEMFS.node_ops.rename,
            unlink: MEMFS.node_ops.unlink,
            rmdir: MEMFS.node_ops.rmdir,
            readdir: MEMFS.node_ops.readdir,
            symlink: MEMFS.node_ops.symlink,
          },
          stream: { llseek: MEMFS.stream_ops.llseek },
        },
        file: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: {
            llseek: MEMFS.stream_ops.llseek,
            read: MEMFS.stream_ops.read,
            write: MEMFS.stream_ops.write,
            allocate: MEMFS.stream_ops.allocate,
            mmap: MEMFS.stream_ops.mmap,
            msync: MEMFS.stream_ops.msync,
          },
        },
        link: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            readlink: MEMFS.node_ops.readlink,
          },
          stream: {},
        },
        chrdev: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: FS.chrdev_stream_ops,
        },
      });
    r = FS.createNode(e, t, n, r);
    return (
      FS.isDir(r.mode)
        ? ((r.node_ops = MEMFS.ops_table.dir.node),
          (r.stream_ops = MEMFS.ops_table.dir.stream),
          (r.contents = {}))
        : FS.isFile(r.mode)
        ? ((r.node_ops = MEMFS.ops_table.file.node),
          (r.stream_ops = MEMFS.ops_table.file.stream),
          (r.usedBytes = 0),
          (r.contents = null))
        : FS.isLink(r.mode)
        ? ((r.node_ops = MEMFS.ops_table.link.node),
          (r.stream_ops = MEMFS.ops_table.link.stream))
        : FS.isChrdev(r.mode) &&
          ((r.node_ops = MEMFS.ops_table.chrdev.node),
          (r.stream_ops = MEMFS.ops_table.chrdev.stream)),
      (r.timestamp = Date.now()),
      e && ((e.contents[t] = r), (e.timestamp = r.timestamp)),
      r
    );
  },
  getFileDataAsTypedArray: function (e) {
    return e.contents
      ? e.contents.subarray
        ? e.contents.subarray(0, e.usedBytes)
        : new Uint8Array(e.contents)
      : new Uint8Array(0);
  },
  expandFileStorage: function (e, t) {
    var n = e.contents ? e.contents.length : 0;
    t <= n ||
      ((t = Math.max(t, (n * (n < 1048576 ? 2 : 1.125)) >>> 0)),
      0 != n && (t = Math.max(t, 256)),
      (n = e.contents),
      (e.contents = new Uint8Array(t)),
      0 < e.usedBytes && e.contents.set(n.subarray(0, e.usedBytes), 0));
  },
  resizeFileStorage: function (e, t) {
    var n;
    e.usedBytes != t &&
      (0 == t
        ? ((e.contents = null), (e.usedBytes = 0))
        : ((n = e.contents),
          (e.contents = new Uint8Array(t)),
          n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))),
          (e.usedBytes = t)));
  },
  node_ops: {
    getattr: function (e) {
      var t = {};
      return (
        (t.dev = FS.isChrdev(e.mode) ? e.id : 1),
        (t.ino = e.id),
        (t.mode = e.mode),
        (t.nlink = 1),
        (t.uid = 0),
        (t.gid = 0),
        (t.rdev = e.rdev),
        FS.isDir(e.mode)
          ? (t.size = 4096)
          : FS.isFile(e.mode)
          ? (t.size = e.usedBytes)
          : FS.isLink(e.mode)
          ? (t.size = e.link.length)
          : (t.size = 0),
        (t.atime = new Date(e.timestamp)),
        (t.mtime = new Date(e.timestamp)),
        (t.ctime = new Date(e.timestamp)),
        (t.blksize = 4096),
        (t.blocks = Math.ceil(t.size / t.blksize)),
        t
      );
    },
    setattr: function (e, t) {
      void 0 !== t.mode && (e.mode = t.mode),
        void 0 !== t.timestamp && (e.timestamp = t.timestamp),
        void 0 !== t.size && MEMFS.resizeFileStorage(e, t.size);
    },
    lookup: function (e, t) {
      throw FS.genericErrors[44];
    },
    mknod: function (e, t, n, r) {
      return MEMFS.createNode(e, t, n, r);
    },
    rename: function (e, t, n) {
      if (FS.isDir(e.mode)) {
        var r;
        try {
          r = FS.lookupNode(t, n);
        } catch (e) {}
        if (r) for (var o in r.contents) throw new FS.ErrnoError(55);
      }
      delete e.parent.contents[e.name],
        (e.parent.timestamp = Date.now()),
        (e.name = n),
        (t.contents[n] = e),
        (t.timestamp = e.parent.timestamp),
        (e.parent = t);
    },
    unlink: function (e, t) {
      delete e.contents[t], (e.timestamp = Date.now());
    },
    rmdir: function (e, t) {
      for (var n in FS.lookupNode(e, t).contents) throw new FS.ErrnoError(55);
      delete e.contents[t], (e.timestamp = Date.now());
    },
    readdir: function (e) {
      var t,
        n = [".", ".."];
      for (t in e.contents) e.contents.hasOwnProperty(t) && n.push(t);
      return n;
    },
    symlink: function (e, t, n) {
      t = MEMFS.createNode(e, t, 41471, 0);
      return (t.link = n), t;
    },
    readlink: function (e) {
      if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
      return e.link;
    },
  },
  stream_ops: {
    read: function (e, t, n, r, o) {
      var a = e.node.contents;
      if (o >= e.node.usedBytes) return 0;
      var s = Math.min(e.node.usedBytes - o, r);
      if (8 < s && a.subarray) t.set(a.subarray(o, o + s), n);
      else for (var i = 0; i < s; i++) t[n + i] = a[o + i];
      return s;
    },
    write: function (e, t, n, r, o, a) {
      if ((t.buffer === HEAP8.buffer && (a = !1), !r)) return 0;
      var s = e.node;
      if (
        ((s.timestamp = Date.now()),
        t.subarray && (!s.contents || s.contents.subarray))
      ) {
        if (a) return (s.contents = t.subarray(n, n + r)), (s.usedBytes = r);
        if (0 === s.usedBytes && 0 === o)
          return (s.contents = t.slice(n, n + r)), (s.usedBytes = r);
        if (o + r <= s.usedBytes)
          return s.contents.set(t.subarray(n, n + r), o), r;
      }
      if (
        (MEMFS.expandFileStorage(s, o + r), s.contents.subarray && t.subarray)
      )
        s.contents.set(t.subarray(n, n + r), o);
      else for (var i = 0; i < r; i++) s.contents[o + i] = t[n + i];
      return (s.usedBytes = Math.max(s.usedBytes, o + r)), r;
    },
    llseek: function (e, t, n) {
      if (
        (1 === n
          ? (t += e.position)
          : 2 === n && FS.isFile(e.node.mode) && (t += e.node.usedBytes),
        t < 0)
      )
        throw new FS.ErrnoError(28);
      return t;
    },
    allocate: function (e, t, n) {
      MEMFS.expandFileStorage(e.node, t + n),
        (e.node.usedBytes = Math.max(e.node.usedBytes, t + n));
    },
    mmap: function (e, t, n, r, o) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
      var a,
        s,
        e = e.node.contents;
      if (2 & o || e.buffer !== buffer) {
        if (
          ((0 < n || n + t < e.length) &&
            (e = e.subarray
              ? e.subarray(n, n + t)
              : Array.prototype.slice.call(e, n, n + t)),
          (s = !0),
          !(a = mmapAlloc(t)))
        )
          throw new FS.ErrnoError(48);
        HEAP8.set(e, a);
      } else (s = !1), (a = e.byteOffset);
      return { ptr: a, allocated: s };
    },
    msync: function (e, t, n, r, o) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
      if (2 & o) return 0;
      MEMFS.stream_ops.write(e, t, 0, r, n, !1);
      return 0;
    },
  },
};
function asyncLoad(t, n, r, e) {
  var o = e ? "" : getUniqueRunDependency("al " + t);
  readAsync(
    t,
    function (e) {
      assert(e, 'Loading data file "' + t + '" failed (no arrayBuffer).'),
        n(new Uint8Array(e)),
        o && removeRunDependency(o);
    },
    function (e) {
      if (!r) throw 'Loading data file "' + t + '" failed.';
      r();
    }
  ),
    o && addRunDependency(o);
}
var _emscripten_get_now,
  IDBFS = {
    dbs: {},
    indexedDB: () => {
      if ("undefined" != typeof indexedDB) return indexedDB;
      var e = null;
      return (
        "object" == typeof window &&
          (e =
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB),
        assert(e, "IDBFS used, but indexedDB not supported"),
        e
      );
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (e) {
      return MEMFS.mount.apply(null, arguments);
    },
    syncfs: (t, r, o) => {
      IDBFS.getLocalSet(t, (e, n) =>
        e
          ? o(e)
          : void IDBFS.getRemoteSet(t, (e, t) => {
              if (e) return o(e);
              (e = r ? t : n), (t = r ? n : t);
              IDBFS.reconcile(e, t, o);
            })
      );
    },
    quit: () => {
      Object.values(IDBFS.dbs).forEach((e) => e.close()), (IDBFS.dbs = {});
    },
    getDB: (e, t) => {
      var n,
        r = IDBFS.dbs[e];
      if (r) return t(null, r);
      try {
        n = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
      } catch (e) {
        return t(e);
      }
      if (!n) return t("Unable to connect to IndexedDB");
      (n.onupgradeneeded = (e) => {
        var t = e.target.result,
          e = e.target.transaction,
          t = t.objectStoreNames.contains(IDBFS.DB_STORE_NAME)
            ? e.objectStore(IDBFS.DB_STORE_NAME)
            : t.createObjectStore(IDBFS.DB_STORE_NAME);
        t.indexNames.contains("timestamp") ||
          t.createIndex("timestamp", "timestamp", { unique: !1 });
      }),
        (n.onsuccess = () => {
          (r = n.result), (IDBFS.dbs[e] = r), t(null, r);
        }),
        (n.onerror = (e) => {
          t(this.error), e.preventDefault();
        });
    },
    getLocalSet: (e, t) => {
      var n = {};
      function r(e) {
        return "." !== e && ".." !== e;
      }
      function o(t) {
        return (e) => PATH.join2(t, e);
      }
      for (
        var a = FS.readdir(e.mountpoint).filter(r).map(o(e.mountpoint));
        a.length;

      ) {
        var s,
          i = a.pop();
        try {
          s = FS.stat(i);
        } catch (e) {
          return t(e);
        }
        FS.isDir(s.mode) && a.push.apply(a, FS.readdir(i).filter(r).map(o(i))),
          (n[i] = { timestamp: s.mtime });
      }
      return t(null, { type: "local", entries: n });
    },
    getRemoteSet: (e, r) => {
      var o = {};
      IDBFS.getDB(e.mountpoint, (e, t) => {
        if (e) return r(e);
        try {
          var n = t.transaction([IDBFS.DB_STORE_NAME], "readonly");
          (n.onerror = (e) => {
            r(this.error), e.preventDefault();
          }),
            (n
              .objectStore(IDBFS.DB_STORE_NAME)
              .index("timestamp")
              .openKeyCursor().onsuccess = (e) => {
              e = e.target.result;
              if (!e) return r(null, { type: "remote", db: t, entries: o });
              (o[e.primaryKey] = { timestamp: e.key }), e.continue();
            });
        } catch (e) {
          return r(e);
        }
      });
    },
    loadLocalEntry: (e, t) => {
      try {
        var n = FS.lookupPath(e).node,
          r = FS.stat(e);
      } catch (e) {
        return t(e);
      }
      return FS.isDir(r.mode)
        ? t(null, { timestamp: r.mtime, mode: r.mode })
        : FS.isFile(r.mode)
        ? ((n.contents = MEMFS.getFileDataAsTypedArray(n)),
          t(null, { timestamp: r.mtime, mode: r.mode, contents: n.contents }))
        : t(new Error("node type not supported"));
    },
    storeLocalEntry: (e, t, n) => {
      try {
        if (FS.isDir(t.mode)) FS.mkdirTree(e, t.mode);
        else {
          if (!FS.isFile(t.mode))
            return n(new Error("node type not supported"));
          FS.writeFile(e, t.contents, { canOwn: !0 });
        }
        FS.chmod(e, t.mode), FS.utime(e, t.timestamp, t.timestamp);
      } catch (e) {
        return n(e);
      }
      n(null);
    },
    removeLocalEntry: (e, t) => {
      try {
        var n = FS.stat(e);
        FS.isDir(n.mode) ? FS.rmdir(e) : FS.isFile(n.mode) && FS.unlink(e);
      } catch (e) {
        return t(e);
      }
      t(null);
    },
    loadRemoteEntry: (e, t, n) => {
      t = e.get(t);
      (t.onsuccess = (e) => {
        n(null, e.target.result);
      }),
        (t.onerror = (e) => {
          n(this.error), e.preventDefault();
        });
    },
    storeRemoteEntry: (e, t, n, r) => {
      try {
        var o = e.put(n, t);
      } catch (e) {
        return void r(e);
      }
      (o.onsuccess = () => {
        r(null);
      }),
        (o.onerror = (e) => {
          r(this.error), e.preventDefault();
        });
    },
    removeRemoteEntry: (e, t, n) => {
      t = e.delete(t);
      (t.onsuccess = () => {
        n(null);
      }),
        (t.onerror = (e) => {
          n(this.error), e.preventDefault();
        });
    },
    reconcile: (r, o, t) => {
      var a = 0,
        s = [];
      Object.keys(r.entries).forEach(function (e) {
        var t = r.entries[e],
          n = o.entries[e];
        (n && t.timestamp.getTime() == n.timestamp.getTime()) ||
          (s.push(e), a++);
      });
      var n = [];
      if (
        (Object.keys(o.entries).forEach(function (e) {
          r.entries[e] || (n.push(e), a++);
        }),
        !a)
      )
        return t(null);
      var i = !1,
        e = ("remote" === r.type ? r : o).db.transaction(
          [IDBFS.DB_STORE_NAME],
          "readwrite"
        ),
        u = e.objectStore(IDBFS.DB_STORE_NAME);
      function l(e) {
        if (e && !i) return (i = !0), t(e);
      }
      (e.onerror = (e) => {
        l(this.error), e.preventDefault();
      }),
        (e.oncomplete = (e) => {
          i || t(null);
        }),
        s.sort().forEach((n) => {
          "local" === o.type
            ? IDBFS.loadRemoteEntry(u, n, (e, t) =>
                e ? l(e) : void IDBFS.storeLocalEntry(n, t, l)
              )
            : IDBFS.loadLocalEntry(n, (e, t) =>
                e ? l(e) : void IDBFS.storeRemoteEntry(u, n, t, l)
              );
        }),
        n
          .sort()
          .reverse()
          .forEach((e) => {
            "local" === o.type
              ? IDBFS.removeLocalEntry(e, l)
              : IDBFS.removeRemoteEntry(u, e, l);
          });
    },
  },
  FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: !1,
    ignorePermissions: !0,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: (e, t = {}) => {
      if (!(e = PATH_FS.resolve(FS.cwd(), e))) return { path: "", node: null };
      if (
        8 <
        (t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t))
          .recurse_count
      )
        throw new FS.ErrnoError(32);
      for (
        var n = PATH.normalizeArray(
            e.split("/").filter((e) => !!e),
            !1
          ),
          r = FS.root,
          o = "/",
          a = 0;
        a < n.length;
        a++
      ) {
        var s = a === n.length - 1;
        if (s && t.parent) break;
        if (
          ((r = FS.lookupNode(r, n[a])),
          (o = PATH.join2(o, n[a])),
          FS.isMountpoint(r) &&
            (!s || (s && t.follow_mount)) &&
            (r = r.mounted.root),
          !s || t.follow)
        )
          for (var i = 0; FS.isLink(r.mode); ) {
            var u = FS.readlink(o),
              o = PATH_FS.resolve(PATH.dirname(o), u),
              r = FS.lookupPath(o, { recurse_count: t.recurse_count + 1 }).node;
            if (40 < i++) throw new FS.ErrnoError(32);
          }
      }
      return { path: o, node: r };
    },
    getPath: (e) => {
      for (var t; ; ) {
        if (FS.isRoot(e)) {
          var n = e.mount.mountpoint;
          return t ? ("/" !== n[n.length - 1] ? n + "/" + t : n + t) : n;
        }
        (t = t ? e.name + "/" + t : e.name), (e = e.parent);
      }
    },
    hashName: (e, t) => {
      for (var n = 0, r = 0; r < t.length; r++)
        n = ((n << 5) - n + t.charCodeAt(r)) | 0;
      return ((e + n) >>> 0) % FS.nameTable.length;
    },
    hashAddNode: (e) => {
      var t = FS.hashName(e.parent.id, e.name);
      (e.name_next = FS.nameTable[t]), (FS.nameTable[t] = e);
    },
    hashRemoveNode: (e) => {
      var t = FS.hashName(e.parent.id, e.name);
      if (FS.nameTable[t] === e) FS.nameTable[t] = e.name_next;
      else
        for (var n = FS.nameTable[t]; n; ) {
          if (n.name_next === e) {
            n.name_next = e.name_next;
            break;
          }
          n = n.name_next;
        }
    },
    lookupNode: (e, t) => {
      var n = FS.mayLookup(e);
      if (n) throw new FS.ErrnoError(n, e);
      for (
        var n = FS.hashName(e.id, t), r = FS.nameTable[n];
        r;
        r = r.name_next
      ) {
        var o = r.name;
        if (r.parent.id === e.id && o === t) return r;
      }
      return FS.lookup(e, t);
    },
    createNode: (e, t, n, r) => {
      r = new FS.FSNode(e, t, n, r);
      return FS.hashAddNode(r), r;
    },
    destroyNode: (e) => {
      FS.hashRemoveNode(e);
    },
    isRoot: (e) => e === e.parent,
    isMountpoint: (e) => !!e.mounted,
    isFile: (e) => 32768 == (61440 & e),
    isDir: (e) => 16384 == (61440 & e),
    isLink: (e) => 40960 == (61440 & e),
    isChrdev: (e) => 8192 == (61440 & e),
    isBlkdev: (e) => 24576 == (61440 & e),
    isFIFO: (e) => 4096 == (61440 & e),
    isSocket: (e) => 49152 == (49152 & e),
    flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
    modeStringToFlags: (e) => {
      var t = FS.flagModes[e];
      if (void 0 === t) throw new Error("Unknown file open mode: " + e);
      return t;
    },
    flagsToPermissionString: (e) => {
      var t = ["r", "w", "rw"][3 & e];
      return 512 & e && (t += "w"), t;
    },
    nodePermissions: (e, t) =>
      FS.ignorePermissions ||
      ((!t.includes("r") || 292 & e.mode) &&
        (!t.includes("w") || 146 & e.mode) &&
        (!t.includes("x") || 73 & e.mode))
        ? 0
        : 2,
    mayLookup: (e) => {
      var t = FS.nodePermissions(e, "x");
      return t || (e.node_ops.lookup ? 0 : 2);
    },
    mayCreate: (e, t) => {
      try {
        FS.lookupNode(e, t);
        return 20;
      } catch (e) {}
      return FS.nodePermissions(e, "wx");
    },
    mayDelete: (e, t, n) => {
      var r;
      try {
        r = FS.lookupNode(e, t);
      } catch (e) {
        return e.errno;
      }
      var o = FS.nodePermissions(e, "wx");
      if (o) return o;
      if (n) {
        if (!FS.isDir(r.mode)) return 54;
        if (FS.isRoot(r) || FS.getPath(r) === FS.cwd()) return 10;
      } else if (FS.isDir(r.mode)) return 31;
      return 0;
    },
    mayOpen: (e, t) =>
      e
        ? FS.isLink(e.mode)
          ? 32
          : FS.isDir(e.mode) &&
            ("r" !== FS.flagsToPermissionString(t) || 512 & t)
          ? 31
          : FS.nodePermissions(e, FS.flagsToPermissionString(t))
        : 44,
    MAX_OPEN_FDS: 4096,
    nextfd: (e = 0, t = FS.MAX_OPEN_FDS) => {
      for (var n = e; n <= t; n++) if (!FS.streams[n]) return n;
      throw new FS.ErrnoError(33);
    },
    getStream: (e) => FS.streams[e],
    createStream: (e, t, n) => {
      FS.FSStream ||
        ((FS.FSStream = function () {
          this.shared = {};
        }),
        (FS.FSStream.prototype = {}),
        Object.defineProperties(FS.FSStream.prototype, {
          object: {
            get: function () {
              return this.node;
            },
            set: function (e) {
              this.node = e;
            },
          },
          isRead: {
            get: function () {
              return 1 != (2097155 & this.flags);
            },
          },
          isWrite: {
            get: function () {
              return 0 != (2097155 & this.flags);
            },
          },
          isAppend: {
            get: function () {
              return 1024 & this.flags;
            },
          },
          flags: {
            get: function () {
              return this.shared.flags;
            },
            set: function (e) {
              this.shared.flags = e;
            },
          },
          position: {
            get: function () {
              return this.shared.position;
            },
            set: function (e) {
              this.shared.position = e;
            },
          },
        })),
        (e = Object.assign(new FS.FSStream(), e));
      n = FS.nextfd(t, n);
      return (e.fd = n), (FS.streams[n] = e);
    },
    closeStream: (e) => {
      FS.streams[e] = null;
    },
    chrdev_stream_ops: {
      open: (e) => {
        var t = FS.getDevice(e.node.rdev);
        (e.stream_ops = t.stream_ops),
          e.stream_ops.open && e.stream_ops.open(e);
      },
      llseek: () => {
        throw new FS.ErrnoError(70);
      },
    },
    major: (e) => e >> 8,
    minor: (e) => 255 & e,
    makedev: (e, t) => (e << 8) | t,
    registerDevice: (e, t) => {
      FS.devices[e] = { stream_ops: t };
    },
    getDevice: (e) => FS.devices[e],
    getMounts: (e) => {
      for (var t = [], n = [e]; n.length; ) {
        var r = n.pop();
        t.push(r), n.push.apply(n, r.mounts);
      }
      return t;
    },
    syncfs: (t, n) => {
      "function" == typeof t && ((n = t), (t = !1)),
        FS.syncFSRequests++,
        1 < FS.syncFSRequests &&
          err(
            "warning: " +
              FS.syncFSRequests +
              " FS.syncfs operations in flight at once, probably just doing extra work"
          );
      var r = FS.getMounts(FS.root.mount),
        o = 0;
      function a(e) {
        return FS.syncFSRequests--, n(e);
      }
      function s(e) {
        if (e) return s.errored ? void 0 : ((s.errored = !0), a(e));
        ++o >= r.length && a(null);
      }
      r.forEach((e) => (e.type.syncfs ? void e.type.syncfs(e, t, s) : s(null)));
    },
    mount: (e, t, n) => {
      var r = "/" === n,
        o = !n;
      if (r && FS.root) throw new FS.ErrnoError(10);
      if (!r && !o) {
        var a = FS.lookupPath(n, { follow_mount: !1 });
        if (((n = a.path), (a = a.node), FS.isMountpoint(a)))
          throw new FS.ErrnoError(10);
        if (!FS.isDir(a.mode)) throw new FS.ErrnoError(54);
      }
      (n = { type: e, opts: t, mountpoint: n, mounts: [] }), (e = e.mount(n));
      return (
        ((e.mount = n).root = e),
        r
          ? (FS.root = e)
          : a && ((a.mounted = n), a.mount && a.mount.mounts.push(n)),
        e
      );
    },
    unmount: (e) => {
      var t = FS.lookupPath(e, { follow_mount: !1 });
      if (!FS.isMountpoint(t.node)) throw new FS.ErrnoError(28);
      var e = t.node,
        t = e.mounted,
        r = FS.getMounts(t);
      Object.keys(FS.nameTable).forEach((e) => {
        for (var t = FS.nameTable[e]; t; ) {
          var n = t.name_next;
          r.includes(t.mount) && FS.destroyNode(t), (t = n);
        }
      }),
        (e.mounted = null);
      t = e.mount.mounts.indexOf(t);
      e.mount.mounts.splice(t, 1);
    },
    lookup: (e, t) => e.node_ops.lookup(e, t),
    mknod: (e, t, n) => {
      var r = FS.lookupPath(e, { parent: !0 }).node,
        o = PATH.basename(e);
      if (!o || "." === o || ".." === o) throw new FS.ErrnoError(28);
      e = FS.mayCreate(r, o);
      if (e) throw new FS.ErrnoError(e);
      if (!r.node_ops.mknod) throw new FS.ErrnoError(63);
      return r.node_ops.mknod(r, o, t, n);
    },
    create: (e, t) => (
      (t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), FS.mknod(e, t, 0)
    ),
    mkdir: (e, t) => (
      (t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), FS.mknod(e, t, 0)
    ),
    mkdirTree: (e, t) => {
      for (var n = e.split("/"), r = "", o = 0; o < n.length; ++o)
        if (n[o]) {
          r += "/" + n[o];
          try {
            FS.mkdir(r, t);
          } catch (e) {
            if (20 != e.errno) throw e;
          }
        }
    },
    mkdev: (e, t, n) => (
      void 0 === n && ((n = t), (t = 438)), (t |= 8192), FS.mknod(e, t, n)
    ),
    symlink: (e, t) => {
      if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
      var n = FS.lookupPath(t, { parent: !0 }).node;
      if (!n) throw new FS.ErrnoError(44);
      var r = PATH.basename(t),
        t = FS.mayCreate(n, r);
      if (t) throw new FS.ErrnoError(t);
      if (!n.node_ops.symlink) throw new FS.ErrnoError(63);
      return n.node_ops.symlink(n, r, e);
    },
    rename: (e, t) => {
      var n = PATH.dirname(e),
        r = PATH.dirname(t),
        o = PATH.basename(e),
        a = PATH.basename(t),
        s = FS.lookupPath(e, { parent: !0 }),
        i = s.node,
        u = FS.lookupPath(t, { parent: !0 }).node;
      if (!i || !u) throw new FS.ErrnoError(44);
      if (i.mount !== u.mount) throw new FS.ErrnoError(75);
      var l,
        d = FS.lookupNode(i, o),
        r = PATH_FS.relative(e, r);
      if ("." !== r.charAt(0)) throw new FS.ErrnoError(28);
      if ("." !== (r = PATH_FS.relative(t, n)).charAt(0))
        throw new FS.ErrnoError(55);
      try {
        l = FS.lookupNode(u, a);
      } catch (e) {}
      if (d !== l) {
        (r = FS.isDir(d.mode)), (o = FS.mayDelete(i, o, r));
        if (o) throw new FS.ErrnoError(o);
        if ((o = l ? FS.mayDelete(u, a, r) : FS.mayCreate(u, a)))
          throw new FS.ErrnoError(o);
        if (!i.node_ops.rename) throw new FS.ErrnoError(63);
        if (FS.isMountpoint(d) || (l && FS.isMountpoint(l)))
          throw new FS.ErrnoError(10);
        if (u !== i && (o = FS.nodePermissions(i, "w")))
          throw new FS.ErrnoError(o);
        FS.hashRemoveNode(d);
        try {
          i.node_ops.rename(d, u, a);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(d);
        }
      }
    },
    rmdir: (e) => {
      var t = FS.lookupPath(e, { parent: !0 }).node,
        n = PATH.basename(e),
        r = FS.lookupNode(t, n),
        e = FS.mayDelete(t, n, !0);
      if (e) throw new FS.ErrnoError(e);
      if (!t.node_ops.rmdir) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(r)) throw new FS.ErrnoError(10);
      t.node_ops.rmdir(t, n), FS.destroyNode(r);
    },
    readdir: (e) => {
      e = FS.lookupPath(e, { follow: !0 }).node;
      if (!e.node_ops.readdir) throw new FS.ErrnoError(54);
      return e.node_ops.readdir(e);
    },
    unlink: (e) => {
      var t = FS.lookupPath(e, { parent: !0 }).node;
      if (!t) throw new FS.ErrnoError(44);
      var n = PATH.basename(e),
        r = FS.lookupNode(t, n),
        e = FS.mayDelete(t, n, !1);
      if (e) throw new FS.ErrnoError(e);
      if (!t.node_ops.unlink) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(r)) throw new FS.ErrnoError(10);
      t.node_ops.unlink(t, n), FS.destroyNode(r);
    },
    readlink: (e) => {
      e = FS.lookupPath(e).node;
      if (!e) throw new FS.ErrnoError(44);
      if (!e.node_ops.readlink) throw new FS.ErrnoError(28);
      return PATH_FS.resolve(FS.getPath(e.parent), e.node_ops.readlink(e));
    },
    stat: (e, t) => {
      t = FS.lookupPath(e, { follow: !t }).node;
      if (!t) throw new FS.ErrnoError(44);
      if (!t.node_ops.getattr) throw new FS.ErrnoError(63);
      return t.node_ops.getattr(t);
    },
    lstat: (e) => FS.stat(e, !0),
    chmod: (e, t, n) => {
      if (
        !(e = "string" == typeof e ? FS.lookupPath(e, { follow: !n }).node : e)
          .node_ops.setattr
      )
        throw new FS.ErrnoError(63);
      e.node_ops.setattr(e, {
        mode: (4095 & t) | (-4096 & e.mode),
        timestamp: Date.now(),
      });
    },
    lchmod: (e, t) => {
      FS.chmod(e, t, !0);
    },
    fchmod: (e, t) => {
      e = FS.getStream(e);
      if (!e) throw new FS.ErrnoError(8);
      FS.chmod(e.node, t);
    },
    chown: (e, t, n, r) => {
      if (
        !(e = "string" == typeof e ? FS.lookupPath(e, { follow: !r }).node : e)
          .node_ops.setattr
      )
        throw new FS.ErrnoError(63);
      e.node_ops.setattr(e, { timestamp: Date.now() });
    },
    lchown: (e, t, n) => {
      FS.chown(e, t, n, !0);
    },
    fchown: (e, t, n) => {
      e = FS.getStream(e);
      if (!e) throw new FS.ErrnoError(8);
      FS.chown(e.node, t, n);
    },
    truncate: (e, t) => {
      if (t < 0) throw new FS.ErrnoError(28);
      var n;
      if (
        !(n = "string" == typeof e ? FS.lookupPath(e, { follow: !0 }).node : e)
          .node_ops.setattr
      )
        throw new FS.ErrnoError(63);
      if (FS.isDir(n.mode)) throw new FS.ErrnoError(31);
      if (!FS.isFile(n.mode)) throw new FS.ErrnoError(28);
      e = FS.nodePermissions(n, "w");
      if (e) throw new FS.ErrnoError(e);
      n.node_ops.setattr(n, { size: t, timestamp: Date.now() });
    },
    ftruncate: (e, t) => {
      e = FS.getStream(e);
      if (!e) throw new FS.ErrnoError(8);
      if (0 == (2097155 & e.flags)) throw new FS.ErrnoError(28);
      FS.truncate(e.node, t);
    },
    utime: (e, t, n) => {
      e = FS.lookupPath(e, { follow: !0 }).node;
      e.node_ops.setattr(e, { timestamp: Math.max(t, n) });
    },
    open: (e, t, n) => {
      if ("" === e) throw new FS.ErrnoError(44);
      if (
        ((n = void 0 === n ? 438 : n),
        (n =
          64 & (t = "string" == typeof t ? FS.modeStringToFlags(t) : t)
            ? (4095 & n) | 32768
            : 0),
        "object" == typeof e)
      )
        r = e;
      else {
        e = PATH.normalize(e);
        try {
          var r = FS.lookupPath(e, { follow: !(131072 & t) }).node;
        } catch (e) {}
      }
      var o = !1;
      if (64 & t)
        if (r) {
          if (128 & t) throw new FS.ErrnoError(20);
        } else (r = FS.mknod(e, n, 0)), (o = !0);
      if (!r) throw new FS.ErrnoError(44);
      if ((FS.isChrdev(r.mode) && (t &= -513), 65536 & t && !FS.isDir(r.mode)))
        throw new FS.ErrnoError(54);
      if (!o) {
        n = FS.mayOpen(r, t);
        if (n) throw new FS.ErrnoError(n);
      }
      512 & t && !o && FS.truncate(r, 0), (t &= -131713);
      o = FS.createStream({
        node: r,
        path: FS.getPath(r),
        flags: t,
        seekable: !0,
        position: 0,
        stream_ops: r.stream_ops,
        ungotten: [],
        error: !1,
      });
      return (
        o.stream_ops.open && o.stream_ops.open(o),
        !Module.logReadFiles ||
          1 & t ||
          (FS.readFiles || (FS.readFiles = {}),
          e in FS.readFiles || (FS.readFiles[e] = 1)),
        o
      );
    },
    close: (e) => {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (e) {
        throw e;
      } finally {
        FS.closeStream(e.fd);
      }
      e.fd = null;
    },
    isClosed: (e) => null === e.fd,
    llseek: (e, t, n) => {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
      if (0 != n && 1 != n && 2 != n) throw new FS.ErrnoError(28);
      return (
        (e.position = e.stream_ops.llseek(e, t, n)),
        (e.ungotten = []),
        e.position
      );
    },
    read: (e, t, n, r, o) => {
      if (r < 0 || o < 0) throw new FS.ErrnoError(28);
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
      if (!e.stream_ops.read) throw new FS.ErrnoError(28);
      var a = void 0 !== o;
      if (a) {
        if (!e.seekable) throw new FS.ErrnoError(70);
      } else o = e.position;
      o = e.stream_ops.read(e, t, n, r, o);
      return a || (e.position += o), o;
    },
    write: (e, t, n, r, o, a) => {
      if (r < 0 || o < 0) throw new FS.ErrnoError(28);
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (0 == (2097155 & e.flags)) throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
      if (!e.stream_ops.write) throw new FS.ErrnoError(28);
      e.seekable && 1024 & e.flags && FS.llseek(e, 0, 2);
      var s = void 0 !== o;
      if (s) {
        if (!e.seekable) throw new FS.ErrnoError(70);
      } else o = e.position;
      a = e.stream_ops.write(e, t, n, r, o, a);
      return s || (e.position += a), a;
    },
    allocate: (e, t, n) => {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (t < 0 || n <= 0) throw new FS.ErrnoError(28);
      if (0 == (2097155 & e.flags)) throw new FS.ErrnoError(8);
      if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode))
        throw new FS.ErrnoError(43);
      if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
      e.stream_ops.allocate(e, t, n);
    },
    mmap: (e, t, n, r, o) => {
      if (0 != (2 & r) && 0 == (2 & o) && 2 != (2097155 & e.flags))
        throw new FS.ErrnoError(2);
      if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(2);
      if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
      return e.stream_ops.mmap(e, t, n, r, o);
    },
    msync: (e, t, n, r, o) =>
      e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, o) : 0,
    munmap: (e) => 0,
    ioctl: (e, t, n) => {
      if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
      return e.stream_ops.ioctl(e, t, n);
    },
    readFile: (e, t = {}) => {
      if (
        ((t.flags = t.flags || 0),
        (t.encoding = t.encoding || "binary"),
        "utf8" !== t.encoding && "binary" !== t.encoding)
      )
        throw new Error('Invalid encoding type "' + t.encoding + '"');
      var n,
        r = FS.open(e, t.flags),
        o = FS.stat(e).size,
        e = new Uint8Array(o);
      return (
        FS.read(r, e, 0, o, 0),
        "utf8" === t.encoding
          ? (n = UTF8ArrayToString(e, 0))
          : "binary" === t.encoding && (n = e),
        FS.close(r),
        n
      );
    },
    writeFile: (e, t, n = {}) => {
      n.flags = n.flags || 577;
      var r = FS.open(e, n.flags, n.mode);
      if ("string" == typeof t) {
        var o = new Uint8Array(lengthBytesUTF8(t) + 1),
          e = stringToUTF8Array(t, o, 0, o.length);
        FS.write(r, o, 0, e, void 0, n.canOwn);
      } else {
        if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
        FS.write(r, t, 0, t.byteLength, void 0, n.canOwn);
      }
      FS.close(r);
    },
    cwd: () => FS.currentPath,
    chdir: (e) => {
      var t = FS.lookupPath(e, { follow: !0 });
      if (null === t.node) throw new FS.ErrnoError(44);
      if (!FS.isDir(t.node.mode)) throw new FS.ErrnoError(54);
      e = FS.nodePermissions(t.node, "x");
      if (e) throw new FS.ErrnoError(e);
      FS.currentPath = t.path;
    },
    createDefaultDirectories: () => {
      FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
    },
    createDefaultDevices: () => {
      FS.mkdir("/dev"),
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (e, t, n, r, o) => r,
        }),
        FS.mkdev("/dev/null", FS.makedev(1, 3)),
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops),
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops),
        FS.mkdev("/dev/tty", FS.makedev(5, 0)),
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
      var e = getRandomDevice();
      FS.createDevice("/dev", "random", e),
        FS.createDevice("/dev", "urandom", e),
        FS.mkdir("/dev/shm"),
        FS.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: () => {
      FS.mkdir("/proc");
      var t = FS.mkdir("/proc/self");
      FS.mkdir("/proc/self/fd"),
        FS.mount(
          {
            mount: () => {
              var e = FS.createNode(t, "fd", 16895, 73);
              return (
                (e.node_ops = {
                  lookup: (e, t) => {
                    var t = +t,
                      n = FS.getStream(t);
                    if (!n) throw new FS.ErrnoError(8);
                    t = {
                      parent: null,
                      mount: { mountpoint: "fake" },
                      node_ops: { readlink: () => n.path },
                    };
                    return (t.parent = t);
                  },
                }),
                e
              );
            },
          },
          {},
          "/proc/self/fd"
        );
    },
    createStandardStreams: () => {
      Module.stdin
        ? FS.createDevice("/dev", "stdin", Module.stdin)
        : FS.symlink("/dev/tty", "/dev/stdin"),
        Module.stdout
          ? FS.createDevice("/dev", "stdout", null, Module.stdout)
          : FS.symlink("/dev/tty", "/dev/stdout"),
        Module.stderr
          ? FS.createDevice("/dev", "stderr", null, Module.stderr)
          : FS.symlink("/dev/tty1", "/dev/stderr");
      FS.open("/dev/stdin", 0),
        FS.open("/dev/stdout", 1),
        FS.open("/dev/stderr", 1);
    },
    ensureErrnoError: () => {
      FS.ErrnoError ||
        ((FS.ErrnoError = function (e, t) {
          (this.node = t),
            (this.setErrno = function (e) {
              this.errno = e;
            }),
            this.setErrno(e),
            (this.message = "FS error");
        }),
        (FS.ErrnoError.prototype = new Error()),
        (FS.ErrnoError.prototype.constructor = FS.ErrnoError),
        [44].forEach((e) => {
          (FS.genericErrors[e] = new FS.ErrnoError(e)),
            (FS.genericErrors[e].stack = "<generic error, no stack>");
        }));
    },
    staticInit: () => {
      FS.ensureErrnoError(),
        (FS.nameTable = new Array(4096)),
        FS.mount(MEMFS, {}, "/"),
        FS.createDefaultDirectories(),
        FS.createDefaultDevices(),
        FS.createSpecialDirectories(),
        (FS.filesystems = { MEMFS: MEMFS, IDBFS: IDBFS });
    },
    init: (e, t, n) => {
      (FS.init.initialized = !0),
        FS.ensureErrnoError(),
        (Module.stdin = e || Module.stdin),
        (Module.stdout = t || Module.stdout),
        (Module.stderr = n || Module.stderr),
        FS.createStandardStreams();
    },
    quit: () => {
      FS.init.initialized = !1;
      for (var e = 0; e < FS.streams.length; e++) {
        var t = FS.streams[e];
        t && FS.close(t);
      }
    },
    getMode: (e, t) => {
      var n = 0;
      return e && (n |= 365), t && (n |= 146), n;
    },
    findObject: (e, t) => {
      t = FS.analyzePath(e, t);
      return t.exists ? t.object : null;
    },
    analyzePath: (e, t) => {
      try {
        e = (r = FS.lookupPath(e, { follow: !t })).path;
      } catch (e) {}
      var n = {
        isRoot: !1,
        exists: !1,
        error: 0,
        name: null,
        path: null,
        object: null,
        parentExists: !1,
        parentPath: null,
        parentObject: null,
      };
      try {
        var r = FS.lookupPath(e, { parent: !0 });
        (n.parentExists = !0),
          (n.parentPath = r.path),
          (n.parentObject = r.node),
          (n.name = PATH.basename(e)),
          (r = FS.lookupPath(e, { follow: !t })),
          (n.exists = !0),
          (n.path = r.path),
          (n.object = r.node),
          (n.name = r.node.name),
          (n.isRoot = "/" === r.path);
      } catch (e) {
        n.error = e.errno;
      }
      return n;
    },
    createPath: (e, t, n, r) => {
      e = "string" == typeof e ? e : FS.getPath(e);
      for (var o = t.split("/").reverse(); o.length; ) {
        var a = o.pop();
        if (a) {
          var s = PATH.join2(e, a);
          try {
            FS.mkdir(s);
          } catch (e) {}
          e = s;
        }
      }
      return s;
    },
    createFile: (e, t, n, r, o) => {
      (t = PATH.join2("string" == typeof e ? e : FS.getPath(e), t)),
        (o = FS.getMode(r, o));
      return FS.create(t, o);
    },
    createDataFile: (e, t, n, r, o, a) => {
      var s = t;
      e &&
        ((e = "string" == typeof e ? e : FS.getPath(e)),
        (s = t ? PATH.join2(e, t) : e));
      (r = FS.getMode(r, o)), (o = FS.create(s, r));
      if (n) {
        if ("string" == typeof n) {
          for (var i = new Array(n.length), u = 0, l = n.length; u < l; ++u)
            i[u] = n.charCodeAt(u);
          n = i;
        }
        FS.chmod(o, 146 | r);
        s = FS.open(o, 577);
        FS.write(s, n, 0, n.length, 0, a), FS.close(s), FS.chmod(o, r);
      }
      return o;
    },
    createDevice: (e, t, u, s) => {
      var n = PATH.join2("string" == typeof e ? e : FS.getPath(e), t),
        e = FS.getMode(!!u, !!s);
      FS.createDevice.major || (FS.createDevice.major = 64);
      t = FS.makedev(FS.createDevice.major++, 0);
      return (
        FS.registerDevice(t, {
          open: (e) => {
            e.seekable = !1;
          },
          close: (e) => {
            s && s.buffer && s.buffer.length && s(10);
          },
          read: (e, t, n, r, o) => {
            for (var a, s = 0, i = 0; i < r; i++) {
              try {
                a = u();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (void 0 === a && 0 === s) throw new FS.ErrnoError(6);
              if (null == a) break;
              s++, (t[n + i] = a);
            }
            return s && (e.node.timestamp = Date.now()), s;
          },
          write: (e, t, n, r, o) => {
            for (var a = 0; a < r; a++)
              try {
                s(t[n + a]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            return r && (e.node.timestamp = Date.now()), a;
          },
        }),
        FS.mkdev(n, e, t)
      );
    },
    forceLoadFile: (e) => {
      if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
      if ("undefined" != typeof XMLHttpRequest)
        throw new Error(
          "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
        );
      if (!read_)
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      try {
        (e.contents = intArrayFromString(read_(e.url), !0)),
          (e.usedBytes = e.contents.length);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    },
    createLazyFile: (e, t, s, n, r) => {
      function o() {
        (this.lengthKnown = !1), (this.chunks = []);
      }
      if (
        ((o.prototype.get = function (e) {
          if (!(e > this.length - 1 || e < 0)) {
            var t = e % this.chunkSize,
              e = (e / this.chunkSize) | 0;
            return this.getter(e)[t];
          }
        }),
        (o.prototype.setDataGetter = function (e) {
          this.getter = e;
        }),
        (o.prototype.cacheLength = function () {
          var e = new XMLHttpRequest();
          if (
            (e.open("HEAD", s, !1),
            e.send(null),
            !((200 <= e.status && e.status < 300) || 304 === e.status))
          )
            throw new Error("Couldn't load " + s + ". Status: " + e.status);
          var r = Number(e.getResponseHeader("Content-length")),
            t = (n = e.getResponseHeader("Accept-Ranges")) && "bytes" === n,
            n = (n = e.getResponseHeader("Content-Encoding")) && "gzip" === n,
            o = 1048576;
          t || (o = r);
          var a = this;
          a.setDataGetter((e) => {
            var t = e * o,
              n = (e + 1) * o - 1,
              n = Math.min(n, r - 1);
            if (
              (void 0 === a.chunks[e] &&
                (a.chunks[e] = ((e, t) => {
                  if (t < e)
                    throw new Error(
                      "invalid range (" +
                        e +
                        ", " +
                        t +
                        ") or no bytes requested!"
                    );
                  if (r - 1 < t)
                    throw new Error(
                      "only " + r + " bytes available! programmer error!"
                    );
                  var n = new XMLHttpRequest();
                  if (
                    (n.open("GET", s, !1),
                    r !== o &&
                      n.setRequestHeader("Range", "bytes=" + e + "-" + t),
                    (n.responseType = "arraybuffer"),
                    n.overrideMimeType &&
                      n.overrideMimeType("text/plain; charset=x-user-defined"),
                    n.send(null),
                    !((200 <= n.status && n.status < 300) || 304 === n.status))
                  )
                    throw new Error(
                      "Couldn't load " + s + ". Status: " + n.status
                    );
                  return void 0 !== n.response
                    ? new Uint8Array(n.response || [])
                    : intArrayFromString(n.responseText || "", !0);
                })(t, n)),
              void 0 === a.chunks[e])
            )
              throw new Error("doXHR failed!");
            return a.chunks[e];
          }),
            (!n && r) ||
              ((o = r = 1),
              (r = this.getter(0).length),
              (o = r),
              out(
                "LazyFiles on gzip forces download of the whole file when length is accessed"
              )),
            (this._length = r),
            (this._chunkSize = o),
            (this.lengthKnown = !0);
        }),
        "undefined" != typeof XMLHttpRequest)
      ) {
        if (!ENVIRONMENT_IS_WORKER)
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var a = new o();
        Object.defineProperties(a, {
          length: {
            get: function () {
              return this.lengthKnown || this.cacheLength(), this._length;
            },
          },
          chunkSize: {
            get: function () {
              return this.lengthKnown || this.cacheLength(), this._chunkSize;
            },
          },
        });
        a = { isDevice: !1, contents: a };
      } else a = { isDevice: !1, url: s };
      var i = FS.createFile(e, t, a, n, r);
      a.contents
        ? (i.contents = a.contents)
        : a.url && ((i.contents = null), (i.url = a.url)),
        Object.defineProperties(i, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            },
          },
        });
      var u = {};
      function l(e, t, n, r, o) {
        var a = e.node.contents;
        if (o >= a.length) return 0;
        var s = Math.min(a.length - o, r);
        if (a.slice) for (var i = 0; i < s; i++) t[n + i] = a[o + i];
        else for (i = 0; i < s; i++) t[n + i] = a.get(o + i);
        return s;
      }
      return (
        Object.keys(i.stream_ops).forEach((e) => {
          var t = i.stream_ops[e];
          u[e] = function () {
            return FS.forceLoadFile(i), t.apply(null, arguments);
          };
        }),
        (u.read = (e, t, n, r, o) => (FS.forceLoadFile(i), l(e, t, n, r, o))),
        (u.mmap = (e, t, n, r, o) => {
          FS.forceLoadFile(i);
          var a = mmapAlloc(t);
          if (!a) throw new FS.ErrnoError(48);
          return l(e, HEAP8, a, t, n), { ptr: a, allocated: !0 };
        }),
        (i.stream_ops = u),
        i
      );
    },
    createPreloadedFile: (n, r, e, o, a, s, i, u, l, d) => {
      var c = r ? PATH_FS.resolve(PATH.join2(n, r)) : n,
        f = getUniqueRunDependency("cp " + c);
      function t(e) {
        function t(e) {
          d && d(),
            u || FS.createDataFile(n, r, e, o, a, l),
            s && s(),
            removeRunDependency(f);
        }
        Browser.handledByPreloadPlugin(e, c, t, () => {
          i && i(), removeRunDependency(f);
        }) || t(e);
      }
      addRunDependency(f),
        "string" == typeof e ? asyncLoad(e, (e) => t(e), i) : t(e);
    },
    indexedDB: () =>
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB,
    DB_NAME: () => "EM_FS_" + window.location.pathname,
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: (s, i, u) => {
      (i = i || (() => {})), (u = u || (() => {}));
      var e = FS.indexedDB();
      try {
        var l = e.open(FS.DB_NAME(), FS.DB_VERSION);
      } catch (e) {
        return u(e);
      }
      (l.onupgradeneeded = () => {
        out("creating db"), l.result.createObjectStore(FS.DB_STORE_NAME);
      }),
        (l.onsuccess = () => {
          var e = l.result.transaction([FS.DB_STORE_NAME], "readwrite"),
            t = e.objectStore(FS.DB_STORE_NAME),
            n = 0,
            r = 0,
            o = s.length;
          function a() {
            (0 == r ? i : u)();
          }
          s.forEach((e) => {
            e = t.put(FS.analyzePath(e).object.contents, e);
            (e.onsuccess = () => {
              ++n + r == o && a();
            }),
              (e.onerror = () => {
                n + ++r == o && a();
              });
          }),
            (e.onerror = u);
        }),
        (l.onerror = u);
    },
    loadFilesFromDB: (i, u, l) => {
      (u = u || (() => {})), (l = l || (() => {}));
      var e = FS.indexedDB();
      try {
        var d = e.open(FS.DB_NAME(), FS.DB_VERSION);
      } catch (e) {
        return l(e);
      }
      (d.onupgradeneeded = l),
        (d.onsuccess = () => {
          var e = d.result;
          try {
            var t = e.transaction([FS.DB_STORE_NAME], "readonly");
          } catch (e) {
            return void l(e);
          }
          var n = t.objectStore(FS.DB_STORE_NAME),
            r = 0,
            o = 0,
            a = i.length;
          function s() {
            (0 == o ? u : l)();
          }
          i.forEach((e) => {
            var t = n.get(e);
            (t.onsuccess = () => {
              FS.analyzePath(e).exists && FS.unlink(e),
                FS.createDataFile(
                  PATH.dirname(e),
                  PATH.basename(e),
                  t.result,
                  !0,
                  !0,
                  !0
                ),
                ++r + o == a && s();
            }),
              (t.onerror = () => {
                r + ++o == a && s();
              });
          }),
            (t.onerror = l);
        }),
        (d.onerror = l);
    },
  };
function _emscripten_set_main_loop_timing(e, t) {
  return (
    (Browser.mainLoop.timingMode = e),
    (Browser.mainLoop.timingValue = t),
    Browser.mainLoop.func
      ? (Browser.mainLoop.running || (Browser.mainLoop.running = !0),
        0 == e
          ? ((Browser.mainLoop.scheduler = function () {
              var e =
                0 |
                Math.max(
                  0,
                  Browser.mainLoop.tickStartTime + t - _emscripten_get_now()
                );
              setTimeout(Browser.mainLoop.runner, e);
            }),
            (Browser.mainLoop.method = "timeout"))
          : 1 == e
          ? ((Browser.mainLoop.scheduler = function () {
              Browser.requestAnimationFrame(Browser.mainLoop.runner);
            }),
            (Browser.mainLoop.method = "rAF"))
          : 2 == e &&
            ("undefined" == typeof setImmediate &&
              ((n = []),
              (r = "setimmediate"),
              addEventListener(
                "message",
                function (e) {
                  (e.data !== r && e.data.target !== r) ||
                    (e.stopPropagation(), n.shift()());
                },
                !0
              ),
              (setImmediate = function (e) {
                n.push(e),
                  ENVIRONMENT_IS_WORKER
                    ? (void 0 === Module.setImmediates &&
                        (Module.setImmediates = []),
                      Module.setImmediates.push(e),
                      postMessage({ target: r }))
                    : postMessage(r, "*");
              })),
            (Browser.mainLoop.scheduler = function () {
              setImmediate(Browser.mainLoop.runner);
            }),
            (Browser.mainLoop.method = "immediate")),
        0)
      : 1
  );
  var n, r;
}
function _exit(e) {
  exit(e);
}
function maybeExit() {}
function setMainLoop(o, e, t, n, r) {
  assert(
    !Browser.mainLoop.func,
    "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
  ),
    (Browser.mainLoop.func = o),
    (Browser.mainLoop.arg = n);
  var a = Browser.mainLoop.currentlyRunningMainloop;
  function s() {
    if (!(a < Browser.mainLoop.currentlyRunningMainloop)) return 1;
    maybeExit();
  }
  if (
    ((Browser.mainLoop.running = !1),
    (Browser.mainLoop.runner = function () {
      if (!ABORT) {
        if (0 < Browser.mainLoop.queue.length) {
          var e,
            t,
            n = Date.now(),
            r = Browser.mainLoop.queue.shift();
          return (r.func(r.arg),
          Browser.mainLoop.remainingBlockers &&
            ((t =
              (e = Browser.mainLoop.remainingBlockers) % 1 == 0
                ? e - 1
                : Math.floor(e)),
            r.counted
              ? (Browser.mainLoop.remainingBlockers = t)
              : ((t += 0.5),
                (Browser.mainLoop.remainingBlockers = (8 * e + t) / 9))),
          out(
            'main loop blocker "' +
              r.name +
              '" took ' +
              (Date.now() - n) +
              " ms"
          ),
          Browser.mainLoop.updateStatus(),
          s())
            ? void setTimeout(Browser.mainLoop.runner, 0)
            : void 0;
        }
        s() &&
          ((Browser.mainLoop.currentFrameNumber =
            (Browser.mainLoop.currentFrameNumber + 1) | 0),
          1 == Browser.mainLoop.timingMode &&
          1 < Browser.mainLoop.timingValue &&
          Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue !=
            0
            ? Browser.mainLoop.scheduler()
            : (0 == Browser.mainLoop.timingMode &&
                (Browser.mainLoop.tickStartTime = _emscripten_get_now()),
              Browser.mainLoop.runIter(o),
              s() &&
                ("object" == typeof SDL &&
                  SDL.audio &&
                  SDL.audio.queueNewAudioData &&
                  SDL.audio.queueNewAudioData(),
                Browser.mainLoop.scheduler())));
      }
    }),
    r ||
      (e && 0 < e
        ? _emscripten_set_main_loop_timing(0, 1e3 / e)
        : _emscripten_set_main_loop_timing(1, 1),
      Browser.mainLoop.scheduler()),
    t)
  )
    throw "unwind";
}
function callUserCallback(e, t) {
  if (!ABORT)
    if (t) e();
    else
      try {
        e();
      } catch (e) {
        handleException(e);
      }
}
function safeSetTimeout(e, t) {
  return setTimeout(function () {
    callUserCallback(e);
  }, t);
}
_emscripten_get_now = ENVIRONMENT_IS_NODE
  ? () => {
      var e = process.hrtime();
      return 1e3 * e[0] + e[1] / 1e6;
    }
  : () => performance.now();
var Browser = {
  mainLoop: {
    running: !1,
    scheduler: null,
    method: "",
    currentlyRunningMainloop: 0,
    func: null,
    arg: 0,
    timingMode: 0,
    timingValue: 0,
    currentFrameNumber: 0,
    queue: [],
    pause: function () {
      (Browser.mainLoop.scheduler = null),
        Browser.mainLoop.currentlyRunningMainloop++;
    },
    resume: function () {
      Browser.mainLoop.currentlyRunningMainloop++;
      var e = Browser.mainLoop.timingMode,
        t = Browser.mainLoop.timingValue,
        n = Browser.mainLoop.func;
      (Browser.mainLoop.func = null),
        setMainLoop(n, 0, !1, Browser.mainLoop.arg, !0),
        _emscripten_set_main_loop_timing(e, t),
        Browser.mainLoop.scheduler();
    },
    updateStatus: function () {
      var e, t, n;
      Module.setStatus &&
        ((e = Module.statusMessage || "Please wait..."),
        (t = Browser.mainLoop.remainingBlockers),
        (n = Browser.mainLoop.expectedBlockers),
        t
          ? t < n
            ? Module.setStatus(e + " (" + (n - t) + "/" + n + ")")
            : Module.setStatus(e)
          : Module.setStatus(""));
    },
    runIter: function (e) {
      if (!ABORT) {
        if (Module.preMainLoop) if (!1 === Module.preMainLoop()) return;
        callUserCallback(e), Module.postMainLoop && Module.postMainLoop();
      }
    },
  },
  isFullscreen: !1,
  pointerLock: !1,
  moduleContextCreatedCallbacks: [],
  workers: [],
  init: function () {
    if (
      (Module.preloadPlugins || (Module.preloadPlugins = []), !Browser.initted)
    ) {
      Browser.initted = !0;
      try {
        new Blob(), (Browser.hasBlobConstructor = !0);
      } catch (e) {
        (Browser.hasBlobConstructor = !1),
          out(
            "warning: no blob constructor, cannot create blobs with mimetypes"
          );
      }
      (Browser.BlobBuilder =
        "undefined" != typeof MozBlobBuilder
          ? MozBlobBuilder
          : "undefined" != typeof WebKitBlobBuilder
          ? WebKitBlobBuilder
          : Browser.hasBlobConstructor
          ? null
          : out("warning: no BlobBuilder")),
        (Browser.URLObject =
          "undefined" != typeof window
            ? window.URL || window.webkitURL
            : void 0),
        Module.noImageDecoding ||
          void 0 !== Browser.URLObject ||
          (out(
            "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
          ),
          (Module.noImageDecoding = !0));
      var e = {
        canHandle: function (e) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e);
        },
        handle: function (t, n, r, o) {
          var e,
            a = null;
          if (Browser.hasBlobConstructor)
            try {
              (a = new Blob([t], { type: Browser.getMimetype(n) })).size !==
                t.length &&
                (a = new Blob([new Uint8Array(t).buffer], {
                  type: Browser.getMimetype(n),
                }));
            } catch (e) {
              warnOnce(
                "Blob constructor present but fails: " +
                  e +
                  "; falling back to blob builder"
              );
            }
          a ||
            ((e = new Browser.BlobBuilder()).append(new Uint8Array(t).buffer),
            (a = e.getBlob()));
          var s = Browser.URLObject.createObjectURL(a),
            i = new Image();
          (i.onload = () => {
            assert(i.complete, "Image " + n + " could not be decoded");
            var e = document.createElement("canvas");
            (e.width = i.width),
              (e.height = i.height),
              e.getContext("2d").drawImage(i, 0, 0),
              (preloadedImages[n] = e),
              Browser.URLObject.revokeObjectURL(s),
              r && r(t);
          }),
            (i.onerror = (e) => {
              out("Image " + s + " could not be decoded"), o && o();
            }),
            (i.src = s);
        },
      };
      Module.preloadPlugins.push(e);
      e = {
        canHandle: function (e) {
          return (
            !Module.noAudioDecoding &&
            e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
          );
        },
      };
      (e.handle = function (t, n, r, e) {
        var o = !1;
        function a(e) {
          o || ((o = !0), (preloadedAudios[n] = e), r && r(t));
        }
        function s() {
          o || ((o = !0), (preloadedAudios[n] = new Audio()), e && e());
        }
        if (!Browser.hasBlobConstructor) return s();
        try {
          var i = new Blob([t], { type: Browser.getMimetype(n) });
        } catch (e) {
          return s();
        }
        var u = Browser.URLObject.createObjectURL(i),
          l = new Audio();
        l.addEventListener(
          "canplaythrough",
          function () {
            a(l);
          },
          !1
        ),
          (l.onerror = function (e) {
            o ||
              (out(
                "warning: browser could not fully decode audio " +
                  n +
                  ", trying slower base64 approach"
              ),
              (l.src =
                "data:audio/x-" +
                n.substr(-3) +
                ";base64," +
                (function (e) {
                  for (
                    var t =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                      n = "",
                      r = 0,
                      o = 0,
                      a = 0;
                    a < e.length;
                    a++
                  )
                    for (r = (r << 8) | e[a], o += 8; 6 <= o; ) {
                      var s = (r >> (o - 6)) & 63;
                      (o -= 6), (n += t[s]);
                    }
                  return (
                    2 == o
                      ? ((n += t[(3 & r) << 4]), (n += "=="))
                      : 4 == o && ((n += t[(15 & r) << 2]), (n += "=")),
                    n
                  );
                })(t)),
              a(l));
          }),
          (l.src = u),
          safeSetTimeout(function () {
            a(l);
          }, 1e4);
      }),
        Module.preloadPlugins.push(e);
      e = Module.canvas;
      e &&
        ((e.requestPointerLock =
          e.requestPointerLock ||
          e.mozRequestPointerLock ||
          e.webkitRequestPointerLock ||
          e.msRequestPointerLock ||
          function () {}),
        (e.exitPointerLock =
          document.exitPointerLock ||
          document.mozExitPointerLock ||
          document.webkitExitPointerLock ||
          document.msExitPointerLock ||
          function () {}),
        (e.exitPointerLock = e.exitPointerLock.bind(document)),
        document.addEventListener("pointerlockchange", t, !1),
        document.addEventListener("mozpointerlockchange", t, !1),
        document.addEventListener("webkitpointerlockchange", t, !1),
        document.addEventListener("mspointerlockchange", t, !1),
        Module.elementPointerLock &&
          e.addEventListener(
            "click",
            function (e) {
              !Browser.pointerLock &&
                Module.canvas.requestPointerLock &&
                (Module.canvas.requestPointerLock(), e.preventDefault());
            },
            !1
          ));
    }
    function t() {
      Browser.pointerLock =
        document.pointerLockElement === Module.canvas ||
        document.mozPointerLockElement === Module.canvas ||
        document.webkitPointerLockElement === Module.canvas ||
        document.msPointerLockElement === Module.canvas;
    }
  },
  handledByPreloadPlugin: function (t, n, r, o) {
    Browser.init();
    var a = !1;
    return (
      Module.preloadPlugins.forEach(function (e) {
        a || (e.canHandle(n) && (e.handle(t, n, r, o), (a = !0)));
      }),
      a
    );
  },
  createContext: function (e, t, n, r) {
    if (t && Module.ctx && e == Module.canvas) return Module.ctx;
    var o, a;
    if (t) {
      var s = {
        antialias: !1,
        alpha: !1,
        majorVersion: "undefined" != typeof WebGL2RenderingContext ? 2 : 1,
      };
      if (r) for (var i in r) s[i] = r[i];
      void 0 !== GL &&
        (a = GL.createContext(e, s)) &&
        (o = GL.getContext(a).GLctx);
    } else o = e.getContext("2d");
    return o
      ? (n &&
          (t ||
            assert(
              void 0 === GLctx,
              "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
            ),
          (Module.ctx = o),
          t && GL.makeContextCurrent(a),
          (Module.useWebGL = t),
          Browser.moduleContextCreatedCallbacks.forEach(function (e) {
            e();
          }),
          Browser.init()),
        o)
      : null;
  },
  destroyContext: function (e, t, n) {},
  fullscreenHandlersInstalled: !1,
  lockPointer: void 0,
  resizeCanvas: void 0,
  requestFullscreen: function (e, t) {
    (Browser.lockPointer = e),
      (Browser.resizeCanvas = t),
      void 0 === Browser.lockPointer && (Browser.lockPointer = !0),
      void 0 === Browser.resizeCanvas && (Browser.resizeCanvas = !1);
    var n = Module.canvas;
    function r() {
      Browser.isFullscreen = !1;
      var e = n.parentNode;
      (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement ||
        document.webkitCurrentFullScreenElement) === e
        ? ((n.exitFullscreen = Browser.exitFullscreen),
          Browser.lockPointer && n.requestPointerLock(),
          (Browser.isFullscreen = !0),
          Browser.resizeCanvas
            ? Browser.setFullscreenCanvasSize()
            : Browser.updateCanvasDimensions(n))
        : (e.parentNode.insertBefore(n, e),
          e.parentNode.removeChild(e),
          Browser.resizeCanvas
            ? Browser.setWindowedCanvasSize()
            : Browser.updateCanvasDimensions(n)),
        Module.onFullScreen && Module.onFullScreen(Browser.isFullscreen),
        Module.onFullscreen && Module.onFullscreen(Browser.isFullscreen);
    }
    Browser.fullscreenHandlersInstalled ||
      ((Browser.fullscreenHandlersInstalled = !0),
      document.addEventListener("fullscreenchange", r, !1),
      document.addEventListener("mozfullscreenchange", r, !1),
      document.addEventListener("webkitfullscreenchange", r, !1),
      document.addEventListener("MSFullscreenChange", r, !1));
    var o = document.createElement("div");
    n.parentNode.insertBefore(o, n),
      o.appendChild(n),
      (o.requestFullscreen =
        o.requestFullscreen ||
        o.mozRequestFullScreen ||
        o.msRequestFullscreen ||
        (o.webkitRequestFullscreen
          ? function () {
              o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          : null) ||
        (o.webkitRequestFullScreen
          ? function () {
              o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          : null)),
      o.requestFullscreen();
  },
  exitFullscreen: function () {
    return (
      !!Browser.isFullscreen &&
      ((
        document.exitFullscreen ||
        document.cancelFullScreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen ||
        document.webkitCancelFullScreen ||
        function () {}
      ).apply(document, []),
      !0)
    );
  },
  nextRAF: 0,
  fakeRequestAnimationFrame: function (e) {
    var t = Date.now();
    if (0 === Browser.nextRAF) Browser.nextRAF = t + 1e3 / 60;
    else for (; t + 2 >= Browser.nextRAF; ) Browser.nextRAF += 1e3 / 60;
    var n = Math.max(Browser.nextRAF - t, 0);
    setTimeout(e, n);
  },
  requestAnimationFrame: function (e) {
    ("function" != typeof requestAnimationFrame
      ? Browser.fakeRequestAnimationFrame
      : requestAnimationFrame)(e);
  },
  safeSetTimeout: function (e) {
    return safeSetTimeout(e);
  },
  safeRequestAnimationFrame: function (e) {
    return Browser.requestAnimationFrame(function () {
      callUserCallback(e);
    });
  },
  getMimetype: function (e) {
    return {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      bmp: "image/bmp",
      ogg: "audio/ogg",
      wav: "audio/wav",
      mp3: "audio/mpeg",
    }[e.substr(e.lastIndexOf(".") + 1)];
  },
  getUserMedia: function (e) {
    window.getUserMedia ||
      (window.getUserMedia =
        navigator.getUserMedia || navigator.mozGetUserMedia),
      window.getUserMedia(e);
  },
  getMovementX: function (e) {
    return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
  },
  getMovementY: function (e) {
    return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
  },
  getMouseWheelDelta: function (e) {
    var t = 0;
    switch (e.type) {
      case "DOMMouseScroll":
        t = e.detail / 3;
        break;
      case "mousewheel":
        t = e.wheelDelta / 120;
        break;
      case "wheel":
        switch (((t = e.deltaY), e.deltaMode)) {
          case 0:
            t /= 100;
            break;
          case 1:
            t /= 3;
            break;
          case 2:
            t *= 80;
            break;
          default:
            throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
        }
        break;
      default:
        throw "unrecognized mouse wheel event: " + e.type;
    }
    return t;
  },
  mouseX: 0,
  mouseY: 0,
  mouseMovementX: 0,
  mouseMovementY: 0,
  touches: {},
  lastTouches: {},
  calculateMouseEvent: function (e) {
    var t, n, r, o, a, s, i;
    Browser.pointerLock
      ? ("mousemove" != e.type && "mozMovementX" in e
          ? (Browser.mouseMovementX = Browser.mouseMovementY = 0)
          : ((Browser.mouseMovementX = Browser.getMovementX(e)),
            (Browser.mouseMovementY = Browser.getMovementY(e))),
        void 0 !== SDL
          ? ((Browser.mouseX = SDL.mouseX + Browser.mouseMovementX),
            (Browser.mouseY = SDL.mouseY + Browser.mouseMovementY))
          : ((Browser.mouseX += Browser.mouseMovementX),
            (Browser.mouseY += Browser.mouseMovementY)))
      : ((t = Module.canvas.getBoundingClientRect()),
        (n = Module.canvas.width),
        (r = Module.canvas.height),
        (s = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset),
        (i = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset),
        "touchstart" !== e.type &&
        "touchend" !== e.type &&
        "touchmove" !== e.type
          ? ((o = e.pageX - (s + t.left)),
            (a = e.pageY - (i + t.top)),
            (o *= n / t.width),
            (a *= r / t.height),
            (Browser.mouseMovementX = o - Browser.mouseX),
            (Browser.mouseMovementY = a - Browser.mouseY),
            (Browser.mouseX = o),
            (Browser.mouseY = a))
          : void 0 !== (a = e.touch) &&
            ((s = a.pageX - (s + t.left)),
            (i = a.pageY - (i + t.top)),
            (i = { x: (s *= n / t.width), y: (i *= r / t.height) }),
            "touchstart" === e.type
              ? ((Browser.lastTouches[a.identifier] = i),
                (Browser.touches[a.identifier] = i))
              : ("touchend" !== e.type && "touchmove" !== e.type) ||
                ((e = (e = Browser.touches[a.identifier]) || i),
                (Browser.lastTouches[a.identifier] = e),
                (Browser.touches[a.identifier] = i))));
  },
  resizeListeners: [],
  updateResizeListeners: function () {
    var t = Module.canvas;
    Browser.resizeListeners.forEach(function (e) {
      e(t.width, t.height);
    });
  },
  setCanvasSize: function (e, t, n) {
    var r = Module.canvas;
    Browser.updateCanvasDimensions(r, e, t),
      n || Browser.updateResizeListeners();
  },
  windowedWidth: 0,
  windowedHeight: 0,
  setFullscreenCanvasSize: function () {
    var e;
    void 0 !== SDL &&
      ((e = HEAPU32[SDL.screen >> 2]),
      (e |= 8388608),
      (HEAP32[SDL.screen >> 2] = e)),
      Browser.updateCanvasDimensions(Module.canvas),
      Browser.updateResizeListeners();
  },
  setWindowedCanvasSize: function () {
    var e;
    void 0 !== SDL &&
      ((e = HEAPU32[SDL.screen >> 2]),
      (e &= -8388609),
      (HEAP32[SDL.screen >> 2] = e)),
      Browser.updateCanvasDimensions(Module.canvas),
      Browser.updateResizeListeners();
  },
  updateCanvasDimensions: function (e, t, n) {
    t && n
      ? ((e.widthNative = t), (e.heightNative = n))
      : ((t = e.widthNative), (n = e.heightNative));
    var r,
      o = t,
      a = n;
    Module.forcedAspectRatio &&
      0 < Module.forcedAspectRatio &&
      (o / a < Module.forcedAspectRatio
        ? (o = Math.round(a * Module.forcedAspectRatio))
        : (a = Math.round(o / Module.forcedAspectRatio))),
      (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement ||
        document.webkitCurrentFullScreenElement) === e.parentNode &&
        "undefined" != typeof screen &&
        ((r = Math.min(screen.width / o, screen.height / a)),
        (o = Math.round(o * r)),
        (a = Math.round(a * r))),
      Browser.resizeCanvas
        ? (e.width != o && (e.width = o),
          e.height != a && (e.height = a),
          void 0 !== e.style &&
            (e.style.removeProperty("width"), e.style.removeProperty("height")))
        : (e.width != t && (e.width = t),
          e.height != n && (e.height = n),
          void 0 !== e.style &&
            (o != t || a != n
              ? (e.style.setProperty("width", o + "px", "important"),
                e.style.setProperty("height", a + "px", "important"))
              : (e.style.removeProperty("width"),
                e.style.removeProperty("height"))));
  },
};
function _SDL_GetTicks() {
  return (Date.now() - SDL.startTime) | 0;
}
function _SDL_LockSurface(e) {
  var t = SDL.surfaces[e];
  if ((t.locked++, 1 < t.locked)) return 0;
  if (
    (t.buffer ||
      ((t.buffer = _malloc(t.width * t.height * 4)),
      (HEAPU32[(e + 20) >> 2] = t.buffer)),
    (HEAPU32[(e + 20) >> 2] = t.buffer),
    e == SDL.screen && Module.screenIsReadOnly && t.image)
  )
    return 0;
  if (SDL.defaults.discardOnLock) {
    if (
      (t.image || (t.image = t.ctx.createImageData(t.width, t.height)),
      !SDL.defaults.opaqueFrontBuffer)
    )
      return;
  } else t.image = t.ctx.getImageData(0, 0, t.width, t.height);
  if (e == SDL.screen && SDL.defaults.opaqueFrontBuffer)
    for (var n = t.image.data, r = n.length, o = 0; o < r / 4; o++)
      n[4 * o + 3] = 255;
  if (SDL.defaults.copyOnLock && !SDL.defaults.discardOnLock) {
    if (t.isFlagSet(2097152))
      throw (
        "CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set" +
        new Error().stack
      );
    HEAPU8.set(t.image.data, t.buffer);
  }
  return 0;
}
function SDL_unicode() {
  return SDL.unicode;
}
function SDL_ttfContext() {
  return SDL.ttfContext;
}
function SDL_audio() {
  return SDL.audio;
}
var SDL = {
  defaults: {
    width: 320,
    height: 200,
    copyOnLock: !0,
    discardOnLock: !1,
    opaqueFrontBuffer: !0,
  },
  version: null,
  surfaces: {},
  canvasPool: [],
  events: [],
  fonts: [null],
  audios: [null],
  rwops: [null],
  music: { audio: null, volume: 1 },
  mixerFrequency: 22050,
  mixerFormat: 32784,
  mixerNumChannels: 2,
  mixerChunkSize: 1024,
  channelMinimumNumber: 0,
  GL: !1,
  glAttributes: {
    0: 3,
    1: 3,
    2: 2,
    3: 0,
    4: 0,
    5: 1,
    6: 16,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 1,
    16: 0,
    17: 0,
    18: 0,
  },
  keyboardState: null,
  keyboardMap: {},
  canRequestFullscreen: !1,
  isRequestingFullscreen: !1,
  textInput: !1,
  startTime: null,
  initFlags: 0,
  buttonState: 0,
  modState: 0,
  DOMButtons: [0, 0, 0],
  DOMEventToSDLEvent: {},
  TOUCH_DEFAULT_ID: 0,
  eventHandler: null,
  eventHandlerContext: null,
  eventHandlerTemp: 0,
  keyCodes: {
    16: 1249,
    17: 1248,
    18: 1250,
    20: 1081,
    33: 1099,
    34: 1102,
    35: 1101,
    36: 1098,
    37: 1104,
    38: 1106,
    39: 1103,
    40: 1105,
    44: 316,
    45: 1097,
    46: 127,
    91: 1251,
    93: 1125,
    96: 1122,
    97: 1113,
    98: 1114,
    99: 1115,
    100: 1116,
    101: 1117,
    102: 1118,
    103: 1119,
    104: 1120,
    105: 1121,
    106: 1109,
    107: 1111,
    109: 1110,
    110: 1123,
    111: 1108,
    112: 1082,
    113: 1083,
    114: 1084,
    115: 1085,
    116: 1086,
    117: 1087,
    118: 1088,
    119: 1089,
    120: 1090,
    121: 1091,
    122: 1092,
    123: 1093,
    124: 1128,
    125: 1129,
    126: 1130,
    127: 1131,
    128: 1132,
    129: 1133,
    130: 1134,
    131: 1135,
    132: 1136,
    133: 1137,
    134: 1138,
    135: 1139,
    144: 1107,
    160: 94,
    161: 33,
    162: 34,
    163: 35,
    164: 36,
    165: 37,
    166: 38,
    167: 95,
    168: 40,
    169: 41,
    170: 42,
    171: 43,
    172: 124,
    173: 45,
    174: 123,
    175: 125,
    176: 126,
    181: 127,
    182: 129,
    183: 128,
    188: 44,
    190: 46,
    191: 47,
    192: 96,
    219: 91,
    220: 92,
    221: 93,
    222: 39,
    224: 1251,
  },
  scanCodes: {
    8: 42,
    9: 43,
    13: 40,
    27: 41,
    32: 44,
    35: 204,
    39: 53,
    44: 54,
    46: 55,
    47: 56,
    48: 39,
    49: 30,
    50: 31,
    51: 32,
    52: 33,
    53: 34,
    54: 35,
    55: 36,
    56: 37,
    57: 38,
    58: 203,
    59: 51,
    61: 46,
    91: 47,
    92: 49,
    93: 48,
    96: 52,
    97: 4,
    98: 5,
    99: 6,
    100: 7,
    101: 8,
    102: 9,
    103: 10,
    104: 11,
    105: 12,
    106: 13,
    107: 14,
    108: 15,
    109: 16,
    110: 17,
    111: 18,
    112: 19,
    113: 20,
    114: 21,
    115: 22,
    116: 23,
    117: 24,
    118: 25,
    119: 26,
    120: 27,
    121: 28,
    122: 29,
    127: 76,
    305: 224,
    308: 226,
    316: 70,
  },
  loadRect: function (e) {
    return {
      x: HEAP32[(e + 0) >> 2],
      y: HEAP32[(e + 4) >> 2],
      w: HEAP32[(e + 8) >> 2],
      h: HEAP32[(e + 12) >> 2],
    };
  },
  updateRect: function (e, t) {
    (HEAP32[e >> 2] = t.x),
      (HEAP32[(e + 4) >> 2] = t.y),
      (HEAP32[(e + 8) >> 2] = t.w),
      (HEAP32[(e + 12) >> 2] = t.h);
  },
  intersectionOfRects: function (e, t) {
    var n = Math.max(e.x, t.x),
      r = Math.max(e.y, t.y),
      o = Math.min(e.x + e.w, t.x + t.w),
      t = Math.min(e.y + e.h, t.y + t.h);
    return { x: n, y: r, w: Math.max(n, o) - n, h: Math.max(r, t) - r };
  },
  checkPixelFormat: function (e) {},
  loadColorToCSSRGB: function (e) {
    e = HEAP32[e >> 2];
    return (
      "rgb(" +
      (255 & e) +
      "," +
      ((e >> 8) & 255) +
      "," +
      ((e >> 16) & 255) +
      ")"
    );
  },
  loadColorToCSSRGBA: function (e) {
    e = HEAP32[e >> 2];
    return (
      "rgba(" +
      (255 & e) +
      "," +
      ((e >> 8) & 255) +
      "," +
      ((e >> 16) & 255) +
      "," +
      ((e >> 24) & 255) / 255 +
      ")"
    );
  },
  translateColorToCSSRGBA: function (e) {
    return (
      "rgba(" +
      (255 & e) +
      "," +
      ((e >> 8) & 255) +
      "," +
      ((e >> 16) & 255) +
      "," +
      (e >>> 24) / 255 +
      ")"
    );
  },
  translateRGBAToCSSRGBA: function (e, t, n, r) {
    return (
      "rgba(" +
      (255 & e) +
      "," +
      (255 & t) +
      "," +
      (255 & n) +
      "," +
      (255 & r) / 255 +
      ")"
    );
  },
  translateRGBAToColor: function (e, t, n, r) {
    return e | (t << 8) | (n << 16) | (r << 24);
  },
  makeSurface: function (e, t, n, r, o, a, s, i, u) {
    var l,
      d = 1 & (n = n || 0),
      c = 2097152 & n,
      f = 67108864 & n,
      m = _malloc(60),
      _ = _malloc(44),
      p = c ? 1 : 4,
      c = 0;
    d || f || (c = _malloc(e * t * 4)),
      (HEAP32[m >> 2] = n),
      (HEAPU32[(m + 4) >> 2] = _),
      (HEAP32[(m + 8) >> 2] = e),
      (HEAP32[(m + 12) >> 2] = t),
      (HEAP32[(m + 16) >> 2] = e * p),
      (HEAPU32[(m + 20) >> 2] = c),
      (HEAP32[(m + 36) >> 2] = 0),
      (HEAP32[(m + 40) >> 2] = 0),
      (HEAP32[(m + 44) >> 2] = Module.canvas.width),
      (HEAP32[(m + 48) >> 2] = Module.canvas.height),
      (HEAP32[(m + 56) >> 2] = 1),
      (HEAP32[_ >> 2] = -2042224636),
      (HEAP32[(_ + 4) >> 2] = 0),
      (HEAP8[(_ + 8) >> 0] = 8 * p),
      (HEAP8[(_ + 9) >> 0] = p),
      (HEAP32[(_ + 12) >> 2] = a || 255),
      (HEAP32[(_ + 16) >> 2] = s || 65280),
      (HEAP32[(_ + 20) >> 2] = i || 16711680),
      (HEAP32[(_ + 24) >> 2] = u || 4278190080),
      (SDL.GL = SDL.GL || f),
      r
        ? (l = Module.canvas)
        : (((l =
            0 < SDL.canvasPool.length
              ? SDL.canvasPool.pop()
              : document.createElement("canvas")).width = e),
          (l.height = t));
    (u = {
      antialias: 0 != SDL.glAttributes[13] && 1 < SDL.glAttributes[14],
      depth: 0 < SDL.glAttributes[6],
      stencil: 0 < SDL.glAttributes[7],
      alpha: 0 < SDL.glAttributes[3],
    }),
      (u = Browser.createContext(l, f, r, u));
    return (
      (SDL.surfaces[m] = {
        width: e,
        height: t,
        canvas: l,
        ctx: u,
        surf: m,
        buffer: c,
        pixelFormat: _,
        alpha: 255,
        flags: n,
        locked: 0,
        usePageCanvas: r,
        source: o,
        isFlagSet: function (e) {
          return n & e;
        },
      }),
      m
    );
  },
  copyIndexedColorData: function (e, t, n, r, o) {
    if (e.colors) {
      var a = Module.canvas.width,
        s = Module.canvas.height,
        i = t || 0,
        n = n || 0,
        u = (r || a - i) + i,
        l = (o || s - n) + n,
        d = e.buffer;
      e.image.data32 || (e.image.data32 = new Uint32Array(e.image.data.buffer));
      for (var c = e.image.data32, f = e.colors32, m = n; m < l; ++m)
        for (var _ = m * a, p = i; p < u; ++p)
          c[_ + p] = f[HEAPU8[(d + _ + p) >> 0]];
    }
  },
  freeSurface: function (e) {
    var t = e + 56,
      n = HEAP32[t >> 2];
    1 < n
      ? (HEAP32[t >> 2] = n - 1)
      : (!(n = SDL.surfaces[e]).usePageCanvas &&
          n.canvas &&
          SDL.canvasPool.push(n.canvas),
        n.buffer && _free(n.buffer),
        _free(n.pixelFormat),
        _free(e),
        (SDL.surfaces[e] = null),
        e === SDL.screen && (SDL.screen = null));
  },
  blitSurface: function (e, t, n, r, o) {
    var a,
      s,
      i = SDL.surfaces[e],
      u = SDL.surfaces[n],
      l = t ? SDL.loadRect(t) : { x: 0, y: 0, w: i.width, h: i.height };
    if (
      ((a = r ? SDL.loadRect(r) : { x: 0, y: 0, w: i.width, h: i.height }),
      u.clipRect &&
        ((e = o && 0 !== l.w ? l.w / a.w : 1),
        (t = o && 0 !== l.h ? l.h / a.h : 1),
        (a = SDL.intersectionOfRects(u.clipRect, a)),
        (l.w = a.w * e),
        (l.h = a.h * t),
        r && SDL.updateRect(r, a)),
      (r = o ? ((s = a.w), a.h) : ((s = l.w), l.h)),
      0 === l.w || 0 === l.h || 0 === s || 0 === r)
    )
      return 0;
    o = u.ctx.globalAlpha;
    return (
      (u.ctx.globalAlpha = i.alpha / 255),
      u.ctx.drawImage(i.canvas, l.x, l.y, l.w, l.h, a.x, a.y, s, r),
      (u.ctx.globalAlpha = o),
      n != SDL.screen &&
        (warnOnce("WARNING: copying canvas data to memory for compatibility"),
        _SDL_LockSurface(n),
        u.locked--),
      0
    );
  },
  downFingers: {},
  savedKeydown: null,
  receiveEvent: function (e) {
    function t() {
      for (var e in SDL.keyboardMap)
        SDL.events.push({ type: "keyup", keyCode: SDL.keyboardMap[e] });
    }
    switch (e.type) {
      case "touchstart":
      case "touchmove":
        e.preventDefault();
        var n = [];
        if ("touchstart" === e.type)
          for (var r = 0; r < e.touches.length; r++) {
            var o = e.touches[r];
            1 != SDL.downFingers[o.identifier] &&
              ((SDL.downFingers[o.identifier] = !0), n.push(o));
          }
        else n = e.touches;
        var a,
          s = n[0];
        if (s) {
          switch (("touchstart" == e.type && (SDL.DOMButtons[0] = 1), e.type)) {
            case "touchstart":
              a = "mousedown";
              break;
            case "touchmove":
              a = "mousemove";
          }
          var i = { type: a, button: 0, pageX: s.clientX, pageY: s.clientY };
          SDL.events.push(i);
        }
        for (r = 0; r < n.length; r++) {
          o = n[r];
          SDL.events.push({ type: e.type, touch: o });
        }
        break;
      case "touchend":
        e.preventDefault();
        for (r = 0; r < e.changedTouches.length; r++) {
          o = e.changedTouches[r];
          !0 === SDL.downFingers[o.identifier] &&
            delete SDL.downFingers[o.identifier];
        }
        i = {
          type: "mouseup",
          button: 0,
          pageX: e.changedTouches[0].clientX,
          pageY: e.changedTouches[0].clientY,
        };
        (SDL.DOMButtons[0] = 0), SDL.events.push(i);
        for (r = 0; r < e.changedTouches.length; r++) {
          o = e.changedTouches[r];
          SDL.events.push({ type: "touchend", touch: o });
        }
        break;
      case "DOMMouseScroll":
      case "mousewheel":
      case "wheel":
        (s = -Browser.getMouseWheelDelta(e)),
          (i =
            0 < (s = 0 == s ? 0 : 0 < s ? Math.max(s, 1) : Math.min(s, -1))
              ? 3
              : 4);
        SDL.events.push({
          type: "mousedown",
          button: i,
          pageX: e.pageX,
          pageY: e.pageY,
        }),
          SDL.events.push({
            type: "mouseup",
            button: i,
            pageX: e.pageX,
            pageY: e.pageY,
          }),
          SDL.events.push({ type: "wheel", deltaX: 0, deltaY: s }),
          e.preventDefault();
        break;
      case "mousemove":
        if (
          (1 === SDL.DOMButtons[0] &&
            SDL.events.push({
              type: "touchmove",
              touch: {
                identifier: 0,
                deviceID: -1,
                pageX: e.pageX,
                pageY: e.pageY,
              },
            }),
          Browser.pointerLock &&
            ("mozMovementX" in e &&
              ((e.movementX = e.mozMovementX), (e.movementY = e.mozMovementY)),
            0 == e.movementX && 0 == e.movementY))
        )
          return void e.preventDefault();
      case "keydown":
      case "keyup":
      case "keypress":
      case "mousedown":
      case "mouseup":
        if (
          (("keydown" === e.type &&
            (SDL_unicode() || SDL.textInput) &&
            8 !== e.keyCode &&
            9 !== e.keyCode) ||
            e.preventDefault(),
          "mousedown" == e.type)
        )
          (SDL.DOMButtons[e.button] = 1),
            SDL.events.push({
              type: "touchstart",
              touch: {
                identifier: 0,
                deviceID: -1,
                pageX: e.pageX,
                pageY: e.pageY,
              },
            });
        else if ("mouseup" == e.type) {
          if (!SDL.DOMButtons[e.button]) return;
          SDL.events.push({
            type: "touchend",
            touch: {
              identifier: 0,
              deviceID: -1,
              pageX: e.pageX,
              pageY: e.pageY,
            },
          }),
            (SDL.DOMButtons[e.button] = 0);
        }
        "keydown" === e.type || "mousedown" === e.type
          ? (SDL.canRequestFullscreen = !0)
          : ("keyup" !== e.type && "mouseup" !== e.type) ||
            (SDL.isRequestingFullscreen &&
              (Module.requestFullscreen(!0, !0),
              (SDL.isRequestingFullscreen = !1)),
            (SDL.canRequestFullscreen = !1)),
          "keypress" === e.type && SDL.savedKeydown
            ? ((SDL.savedKeydown.keypressCharCode = e.charCode),
              (SDL.savedKeydown = null))
            : "keydown" === e.type && (SDL.savedKeydown = e),
          ("keypress" === e.type && !SDL.textInput) || SDL.events.push(e);
        break;
      case "mouseout":
        for (r = 0; r < 3; r++)
          SDL.DOMButtons[r] &&
            (SDL.events.push({
              type: "mouseup",
              button: r,
              pageX: e.pageX,
              pageY: e.pageY,
            }),
            (SDL.DOMButtons[r] = 0));
        e.preventDefault();
        break;
      case "focus":
        SDL.events.push(e), e.preventDefault();
        break;
      case "blur":
        SDL.events.push(e), t(), e.preventDefault();
        break;
      case "visibilitychange":
        SDL.events.push({
          type: "visibilitychange",
          visible: !document.hidden,
        }),
          t(),
          e.preventDefault();
        break;
      case "unload":
        return void (
          Browser.mainLoop.runner &&
          (SDL.events.push(e), Browser.mainLoop.runner())
        );
      case "resize":
        SDL.events.push(e), e.preventDefault && e.preventDefault();
    }
    1e4 <= SDL.events.length &&
      (err("SDL event queue full, dropping events"),
      (SDL.events = SDL.events.slice(0, 1e4))),
      SDL.flushEventsToHandler();
  },
  lookupKeyCodeForEvent: function (e) {
    var t = e.keyCode;
    return (
      65 <= t && t <= 90
        ? (t += 32)
        : ((t = SDL.keyCodes[e.keyCode] || e.keyCode),
          2 === e.location && 1248 <= t && t <= 1251 && (t += 4)),
      t
    );
  },
  handleEvent: function (e) {
    if (!e.handled)
      switch (((e.handled = !0), e.type)) {
        case "touchstart":
        case "touchend":
        case "touchmove":
          Browser.calculateMouseEvent(e);
          break;
        case "keydown":
        case "keyup":
          var t = "keydown" === e.type,
            n = SDL.lookupKeyCodeForEvent(e);
          (HEAP8[(SDL.keyboardState + n) >> 0] = t),
            (SDL.modState =
              (HEAP8[(SDL.keyboardState + 1248) >> 0] ? 64 : 0) |
              (HEAP8[(SDL.keyboardState + 1249) >> 0] ? 1 : 0) |
              (HEAP8[(SDL.keyboardState + 1250) >> 0] ? 256 : 0) |
              (HEAP8[(SDL.keyboardState + 1252) >> 0] ? 128 : 0) |
              (HEAP8[(SDL.keyboardState + 1253) >> 0] ? 2 : 0) |
              (HEAP8[(SDL.keyboardState + 1254) >> 0] ? 512 : 0)),
            t ? (SDL.keyboardMap[n] = e.keyCode) : delete SDL.keyboardMap[n];
          break;
        case "mousedown":
        case "mouseup":
          "mousedown" == e.type
            ? (SDL.buttonState |= 1 << e.button)
            : "mouseup" == e.type && (SDL.buttonState &= ~(1 << e.button));
        case "mousemove":
          Browser.calculateMouseEvent(e);
      }
  },
  flushEventsToHandler: function () {
    if (SDL.eventHandler)
      for (; SDL.pollEvent(SDL.eventHandlerTemp); )
        getWasmTableEntry(SDL.eventHandler)(
          SDL.eventHandlerContext,
          SDL.eventHandlerTemp
        );
  },
  pollEvent: function (e) {
    if (
      (512 & SDL.initFlags && SDL.joystickEventState && SDL.queryJoysticks(), e)
    ) {
      for (; 0 < SDL.events.length; )
        if (!1 !== SDL.makeCEvent(SDL.events.shift(), e)) return 1;
      return 0;
    }
    return 0 < SDL.events.length;
  },
  makeCEvent: function (e, t) {
    if ("number" == typeof e) return _memcpy(t, e, 28), void _free(e);
    switch ((SDL.handleEvent(e), e.type)) {
      case "keydown":
      case "keyup":
        var n = "keydown" === e.type,
          r = SDL.lookupKeyCodeForEvent(e),
          o = 1024 <= r ? r - 1024 : SDL.scanCodes[r] || r;
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP8[(t + 8) >> 0] = n ? 1 : 0),
          (HEAP8[(t + 9) >> 0] = 0),
          (HEAP32[(t + 12) >> 2] = o),
          (HEAP32[(t + 16) >> 2] = r),
          (HEAP16[(t + 20) >> 1] = SDL.modState),
          (HEAP32[(t + 24) >> 2] = e.keypressCharCode || r);
        break;
      case "keypress":
        HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type];
        for (
          var a = intArrayFromString(String.fromCharCode(e.charCode)), s = 0;
          s < a.length;
          ++s
        )
          HEAP8[(t + (8 + s)) >> 0] = a[s];
        break;
      case "mousedown":
      case "mouseup":
      case "mousemove":
        "mousemove" != e.type
          ? ((n = "mousedown" === e.type),
            (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
            (HEAP32[(t + 4) >> 2] = 0),
            (HEAP32[(t + 8) >> 2] = 0),
            (HEAP32[(t + 12) >> 2] = 0),
            (HEAP8[(t + 16) >> 0] = e.button + 1),
            (HEAP8[(t + 17) >> 0] = n ? 1 : 0),
            (HEAP32[(t + 20) >> 2] = Browser.mouseX),
            (HEAP32[(t + 24) >> 2] = Browser.mouseY))
          : ((HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
            (HEAP32[(t + 4) >> 2] = 0),
            (HEAP32[(t + 8) >> 2] = 0),
            (HEAP32[(t + 12) >> 2] = 0),
            (HEAP32[(t + 16) >> 2] = SDL.buttonState),
            (HEAP32[(t + 20) >> 2] = Browser.mouseX),
            (HEAP32[(t + 24) >> 2] = Browser.mouseY),
            (HEAP32[(t + 28) >> 2] = Browser.mouseMovementX),
            (HEAP32[(t + 32) >> 2] = Browser.mouseMovementY));
        break;
      case "wheel":
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 16) >> 2] = e.deltaX),
          (HEAP32[(t + 20) >> 2] = e.deltaY);
        break;
      case "touchstart":
      case "touchend":
      case "touchmove":
        var i = e.touch;
        if (!Browser.touches[i.identifier]) break;
        var u = Module.canvas.width,
          o = Module.canvas.height,
          r = Browser.touches[i.identifier].x / u,
          n = Browser.touches[i.identifier].y / o,
          u = r - Browser.lastTouches[i.identifier].x / u,
          o = n - Browser.lastTouches[i.identifier].y / o;
        if (
          (void 0 === i.deviceID && (i.deviceID = SDL.TOUCH_DEFAULT_ID),
          0 == u && 0 == o && "touchmove" === e.type)
        )
          return !1;
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 4) >> 2] = _SDL_GetTicks()),
          (tempI64 = [
            i.deviceID >>> 0,
            ((tempDouble = i.deviceID),
            1 <= +Math.abs(tempDouble)
              ? 0 < tempDouble
                ? (0 |
                    Math.min(
                      +Math.floor(tempDouble / 4294967296),
                      4294967295
                    )) >>>
                  0
                : ~~+Math.ceil(
                    (tempDouble - (~~tempDouble >>> 0)) / 4294967296
                  ) >>> 0
              : 0),
          ]),
          (HEAP32[(t + 8) >> 2] = tempI64[0]),
          (HEAP32[(t + 12) >> 2] = tempI64[1]),
          (tempI64 = [
            i.identifier >>> 0,
            ((tempDouble = i.identifier),
            1 <= +Math.abs(tempDouble)
              ? 0 < tempDouble
                ? (0 |
                    Math.min(
                      +Math.floor(tempDouble / 4294967296),
                      4294967295
                    )) >>>
                  0
                : ~~+Math.ceil(
                    (tempDouble - (~~tempDouble >>> 0)) / 4294967296
                  ) >>> 0
              : 0),
          ]),
          (HEAP32[(t + 16) >> 2] = tempI64[0]),
          (HEAP32[(t + 20) >> 2] = tempI64[1]),
          (HEAPF32[(t + 24) >> 2] = r),
          (HEAPF32[(t + 28) >> 2] = n),
          (HEAPF32[(t + 32) >> 2] = u),
          (HEAPF32[(t + 36) >> 2] = o),
          void 0 !== i.force
            ? (HEAPF32[(t + 40) >> 2] = i.force)
            : (HEAPF32[(t + 40) >> 2] = "touchend" == e.type ? 0 : 1);
        break;
      case "unload":
        HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type];
        break;
      case "resize":
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 4) >> 2] = e.w),
          (HEAP32[(t + 8) >> 2] = e.h);
        break;
      case "joystick_button_up":
      case "joystick_button_down":
        var l = "joystick_button_up" === e.type ? 0 : 1;
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP8[(t + 4) >> 0] = e.index),
          (HEAP8[(t + 5) >> 0] = e.button),
          (HEAP8[(t + 6) >> 0] = l);
        break;
      case "joystick_axis_motion":
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP8[(t + 4) >> 0] = e.index),
          (HEAP8[(t + 5) >> 0] = e.axis),
          (HEAP32[(t + 8) >> 2] = SDL.joystickAxisValueConversion(e.value));
        break;
      case "focus":
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 4) >> 2] = 0),
          (HEAP8[(t + 8) >> 0] = 12);
        break;
      case "blur":
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 4) >> 2] = 0),
          (HEAP8[(t + 8) >> 0] = 13);
        break;
      case "visibilitychange":
        l = e.visible ? 1 : 2;
        (HEAP32[t >> 2] = SDL.DOMEventToSDLEvent[e.type]),
          (HEAP32[(t + 4) >> 2] = 0),
          (HEAP8[(t + 8) >> 0] = l);
        break;
      default:
        throw "Unhandled SDL event: " + e.type;
    }
  },
  makeFontString: function (e, t) {
    return (
      "'" != t.charAt(0) && '"' != t.charAt(0) && (t = '"' + t + '"'),
      e + "px " + t + ", serif"
    );
  },
  estimateTextWidth: function (e, t) {
    var n = e.size,
      n = SDL.makeFontString(n, e.name),
      e = SDL_ttfContext();
    return (e.font = n), 0 | e.measureText(t).width;
  },
  allocateChannels: function (e) {
    if (!(SDL.numChannels && SDL.numChannels >= e && 0 != e)) {
      (SDL.numChannels = e), (SDL.channels = []);
      for (var t = 0; t < e; t++) SDL.channels[t] = { audio: null, volume: 1 };
    }
  },
  setGetVolume: function (e, t) {
    if (!e) return 0;
    var n = 128 * e.volume;
    if (-1 != t && ((e.volume = Math.min(Math.max(t, 0), 128) / 128), e.audio))
      try {
        (e.audio.volume = e.volume),
          e.audio.webAudioGainNode &&
            (e.audio.webAudioGainNode.gain.value = e.volume);
      } catch (e) {
        err("setGetVolume failed to set audio volume: " + e);
      }
    return n;
  },
  setPannerPosition: function (e, t, n, r) {
    e &&
      e.audio &&
      e.audio.webAudioPannerNode &&
      e.audio.webAudioPannerNode.setPosition(t, n, r);
  },
  playWebAudio: function (e) {
    if (e && !e.webAudioNode && SDL.webAudioAvailable())
      try {
        var t = e.resource.webAudio;
        if (((e.paused = !1), !t.decodedBuffer))
          return (
            void 0 === t.onDecodeComplete &&
              abort("Cannot play back audio object that was not loaded"),
            void t.onDecodeComplete.push(function () {
              e.paused || SDL.playWebAudio(e);
            })
          );
        (e.webAudioNode = SDL.audioContext.createBufferSource()),
          (e.webAudioNode.buffer = t.decodedBuffer),
          (e.webAudioNode.loop = e.loop),
          (e.webAudioNode.onended = function () {
            e.onended();
          }),
          (e.webAudioPannerNode = SDL.audioContext.createPanner()),
          e.webAudioPannerNode.setPosition(0, 0, -0.5),
          (e.webAudioPannerNode.panningModel = "equalpower"),
          (e.webAudioGainNode = SDL.audioContext.createGain()),
          (e.webAudioGainNode.gain.value = e.volume),
          e.webAudioNode.connect(e.webAudioPannerNode),
          e.webAudioPannerNode.connect(e.webAudioGainNode),
          e.webAudioGainNode.connect(SDL.audioContext.destination),
          e.webAudioNode.start(0, e.currentPosition),
          (e.startTime = SDL.audioContext.currentTime - e.currentPosition);
      } catch (e) {
        err("playWebAudio failed: " + e);
      }
  },
  pauseWebAudio: function (e) {
    if (e) {
      if (e.webAudioNode)
        try {
          (e.currentPosition =
            (SDL.audioContext.currentTime - e.startTime) %
            e.resource.webAudio.decodedBuffer.duration),
            (e.webAudioNode.onended = void 0),
            e.webAudioNode.stop(0),
            (e.webAudioNode = void 0);
        } catch (e) {
          err("pauseWebAudio failed: " + e);
        }
      e.paused = !0;
    }
  },
  openAudioContext: function () {
    SDL.audioContext ||
      ("undefined" != typeof AudioContext
        ? (SDL.audioContext = new AudioContext())
        : "undefined" != typeof webkitAudioContext &&
          (SDL.audioContext = new webkitAudioContext()));
  },
  webAudioAvailable: function () {
    return !!SDL.audioContext;
  },
  fillWebAudioBufferFromHeap: function (e, t, n) {
    for (var r = SDL_audio(), o = r.channels, a = 0; a < o; ++a) {
      var s = n.getChannelData(a);
      if (s.length != t)
        throw (
          "Web Audio output buffer length mismatch! Destination size: " +
          s.length +
          " samples vs expected " +
          t +
          " samples!"
        );
      if (32784 == r.format)
        for (var i = 0; i < t; ++i)
          s[i] = HEAP16[(e + 2 * (i * o + a)) >> 1] / 32768;
      else if (8 == r.format)
        for (i = 0; i < t; ++i) {
          var u = HEAP8[(e + (i * o + a)) >> 0];
          s[i] = (0 <= u ? u - 128 : u + 128) / 128;
        }
      else {
        if (33056 != r.format)
          throw "Invalid SDL audio format " + r.format + "!";
        for (i = 0; i < t; ++i) s[i] = HEAPF32[(e + 4 * (i * o + a)) >> 2];
      }
    }
  },
  debugSurface: function (e) {
    out("dumping surface " + [e.surf, e.source, e.width, e.height]);
    for (
      var t = e.ctx.getImageData(0, 0, e.width, e.height).data,
        n = Math.min(e.width, e.height),
        r = 0;
      r < n;
      r++
    )
      out(
        "   diagonal " +
          r +
          ":" +
          [
            t[r * e.width * 4 + 4 * r],
            t[r * e.width * 4 + 4 * r + 1],
            t[r * e.width * 4 + 4 * r + 2],
            t[r * e.width * 4 + 4 * r + 3],
          ]
      );
  },
  joystickEventState: 1,
  lastJoystickState: {},
  joystickNamePool: {},
  recordJoystickState: function (e, t) {
    for (var n = new Array(t.buttons.length), r = 0; r < t.buttons.length; r++)
      n[r] = SDL.getJoystickButtonState(t.buttons[r]);
    SDL.lastJoystickState[e] = {
      buttons: n,
      axes: t.axes.slice(0),
      timestamp: t.timestamp,
      index: t.index,
      id: t.id,
    };
  },
  getJoystickButtonState: function (e) {
    return "object" == typeof e ? e.pressed : 0 < e;
  },
  queryJoysticks: function () {
    for (var e in SDL.lastJoystickState) {
      var t = SDL.getGamepad(e - 1),
        n = SDL.lastJoystickState[e];
      if (void 0 === t) return;
      if (null === t) return;
      if (
        "number" != typeof t.timestamp ||
        t.timestamp != n.timestamp ||
        !t.timestamp
      ) {
        for (var r = 0; r < t.buttons.length; r++) {
          var o = SDL.getJoystickButtonState(t.buttons[r]);
          o !== n.buttons[r] &&
            SDL.events.push({
              type: o ? "joystick_button_down" : "joystick_button_up",
              joystick: e,
              index: e - 1,
              button: r,
            });
        }
        for (r = 0; r < t.axes.length; r++)
          t.axes[r] !== n.axes[r] &&
            SDL.events.push({
              type: "joystick_axis_motion",
              joystick: e,
              index: e - 1,
              axis: r,
              value: t.axes[r],
            });
        SDL.recordJoystickState(e, t);
      }
    }
  },
  joystickAxisValueConversion: function (e) {
    return (
      (e = Math.min(1, Math.max(e, -1))), Math.ceil(32767.5 * (e + 1) - 32768)
    );
  },
  getGamepads: function () {
    var e =
      navigator.getGamepads ||
      navigator.webkitGamepads ||
      navigator.mozGamepads ||
      navigator.gamepads ||
      navigator.webkitGetGamepads;
    return void 0 !== e ? e.apply(navigator) : [];
  },
  getGamepad: function (e) {
    var t = SDL.getGamepads();
    return t.length > e && 0 <= e ? t[e] : null;
  },
};
function _SDL_GetNumAudioDrivers() {
  return 1;
}
function _SDL_Init(e) {
  return (
    (SDL.startTime = Date.now()),
    (SDL.initFlags = e),
    Module.doNotCaptureKeyboard ||
      ((e = Module.keyboardListeningElement || document).addEventListener(
        "keydown",
        SDL.receiveEvent
      ),
      e.addEventListener("keyup", SDL.receiveEvent),
      e.addEventListener("keypress", SDL.receiveEvent),
      window.addEventListener("focus", SDL.receiveEvent),
      window.addEventListener("blur", SDL.receiveEvent),
      document.addEventListener("visibilitychange", SDL.receiveEvent)),
    window.addEventListener("unload", SDL.receiveEvent),
    (SDL.keyboardState = _malloc(65536)),
    zeroMemory(SDL.keyboardState, 65536),
    (SDL.DOMEventToSDLEvent.keydown = 768),
    (SDL.DOMEventToSDLEvent.keyup = 769),
    (SDL.DOMEventToSDLEvent.keypress = 771),
    (SDL.DOMEventToSDLEvent.mousedown = 1025),
    (SDL.DOMEventToSDLEvent.mouseup = 1026),
    (SDL.DOMEventToSDLEvent.mousemove = 1024),
    (SDL.DOMEventToSDLEvent.wheel = 1027),
    (SDL.DOMEventToSDLEvent.touchstart = 1792),
    (SDL.DOMEventToSDLEvent.touchend = 1793),
    (SDL.DOMEventToSDLEvent.touchmove = 1794),
    (SDL.DOMEventToSDLEvent.unload = 256),
    (SDL.DOMEventToSDLEvent.resize = 28673),
    (SDL.DOMEventToSDLEvent.visibilitychange = 512),
    (SDL.DOMEventToSDLEvent.focus = 512),
    (SDL.DOMEventToSDLEvent.blur = 512),
    (SDL.DOMEventToSDLEvent.joystick_axis_motion = 1536),
    (SDL.DOMEventToSDLEvent.joystick_button_down = 1539),
    (SDL.DOMEventToSDLEvent.joystick_button_up = 1540),
    0
  );
}
function listenOnce(e, t, n) {
  e.addEventListener(t, n, { once: !0 });
}
function autoResumeAudioContext(n, e) {
  (e = e || [document, document.getElementById("canvas")]),
    ["keydown", "mousedown", "touchstart"].forEach(function (t) {
      e.forEach(function (e) {
        e &&
          listenOnce(e, t, function () {
            "suspended" === n.state && n.resume();
          });
      });
    });
}
function _SDL_OpenAudio(e, t) {
  try {
    if (
      ((SDL.audio = {
        freq: HEAPU32[e >> 2],
        format: HEAPU16[(e + 4) >> 1],
        channels: HEAPU8[(e + 6) >> 0],
        samples: HEAPU16[(e + 8) >> 1],
        callback: HEAPU32[(e + 16) >> 2],
        userdata: HEAPU32[(e + 20) >> 2],
        paused: !0,
        timer: null,
      }),
      8 == SDL.audio.format)
    )
      SDL.audio.silence = 128;
    else if (32784 == SDL.audio.format) SDL.audio.silence = 0;
    else {
      if (33056 != SDL.audio.format)
        throw "Invalid SDL audio format " + SDL.audio.format + "!";
      SDL.audio.silence = 0;
    }
    if (SDL.audio.freq <= 0)
      throw "Unsupported sound frequency " + SDL.audio.freq + "!";
    if (SDL.audio.freq <= 22050) SDL.audio.freq = 22050;
    else if (SDL.audio.freq <= 32e3) SDL.audio.freq = 32e3;
    else if (SDL.audio.freq <= 44100) SDL.audio.freq = 44100;
    else if (SDL.audio.freq <= 48e3) SDL.audio.freq = 48e3;
    else {
      if (!(SDL.audio.freq <= 96e3))
        throw "Unsupported sound frequency " + SDL.audio.freq + "!";
      SDL.audio.freq = 96e3;
    }
    if (0 == SDL.audio.channels) SDL.audio.channels = 1;
    else {
      if (SDL.audio.channels < 0 || 32 < SDL.audio.channels)
        throw (
          "Unsupported number of audio channels for SDL audio: " +
          SDL.audio.channels +
          "!"
        );
      1 != SDL.audio.channels &&
        2 != SDL.audio.channels &&
        out(
          "Warning: Using untested number of audio channels " +
            SDL.audio.channels
        );
    }
    if (SDL.audio.samples < 128 || 524288 < SDL.audio.samples)
      throw "Unsupported audio callback buffer size " + SDL.audio.samples + "!";
    if (0 != (SDL.audio.samples & (SDL.audio.samples - 1)))
      throw (
        "Audio callback buffer size " +
        SDL.audio.samples +
        " must be a power-of-two!"
      );
    var n = SDL.audio.samples * SDL.audio.channels;
    if (8 == SDL.audio.format) SDL.audio.bytesPerSample = 1;
    else if (32784 == SDL.audio.format) SDL.audio.bytesPerSample = 2;
    else {
      if (33056 != SDL.audio.format)
        throw "Invalid SDL audio format " + SDL.audio.format + "!";
      SDL.audio.bytesPerSample = 4;
    }
    if (
      ((SDL.audio.bufferSize = n * SDL.audio.bytesPerSample),
      (SDL.audio.bufferDurationSecs =
        SDL.audio.bufferSize /
        SDL.audio.bytesPerSample /
        SDL.audio.channels /
        SDL.audio.freq),
      (SDL.audio.bufferingDelay = 0.05),
      (SDL.audio.buffer = _malloc(SDL.audio.bufferSize)),
      (SDL.audio.numSimultaneouslyQueuedBuffers =
        Module.SDL_numSimultaneouslyQueuedBuffers || 5),
      (SDL.audio.queueNewAudioData = function () {
        if (SDL.audio)
          for (var e = 0; e < SDL.audio.numSimultaneouslyQueuedBuffers; ++e) {
            if (
              SDL.audio.nextPlayTime - SDL.audioContext.currentTime >=
              SDL.audio.bufferingDelay +
                SDL.audio.bufferDurationSecs *
                  SDL.audio.numSimultaneouslyQueuedBuffers
            )
              return;
            getWasmTableEntry(SDL.audio.callback)(
              SDL.audio.userdata,
              SDL.audio.buffer,
              SDL.audio.bufferSize
            ),
              SDL.audio.pushAudio(SDL.audio.buffer, SDL.audio.bufferSize);
          }
      }),
      (SDL.audio.caller = function () {
        var e, t;
        SDL.audio &&
          (--SDL.audio.numAudioTimersPending,
          SDL.audio.queueNewAudioData(),
          (e = SDL.audio.nextPlayTime - SDL.audioContext.currentTime),
          (t = SDL.audio.bufferDurationSecs / 2),
          SDL.audio.numAudioTimersPending <
            SDL.audio.numSimultaneouslyQueuedBuffers &&
            (++SDL.audio.numAudioTimersPending,
            (SDL.audio.timer = safeSetTimeout(
              SDL.audio.caller,
              Math.max(0, 1e3 * (e - t))
            )),
            SDL.audio.numAudioTimersPending <
              SDL.audio.numSimultaneouslyQueuedBuffers &&
              (++SDL.audio.numAudioTimersPending,
              safeSetTimeout(SDL.audio.caller, 1))));
      }),
      (SDL.audio.audioOutput = new Audio()),
      SDL.openAudioContext(),
      !SDL.audioContext)
    )
      throw "Web Audio API is not available!";
    autoResumeAudioContext(SDL.audioContext),
      (SDL.audio.nextPlayTime = 0),
      (SDL.audio.pushAudio = function (e, t) {
        try {
          if (SDL.audio.paused) return;
          var n = t / SDL.audio.bytesPerSample / SDL.audio.channels;
          if (n != SDL.audio.samples)
            throw "Received mismatching audio buffer size!";
          var r = SDL.audioContext.createBufferSource(),
            o = SDL.audioContext.createBuffer(
              SDL.audio.channels,
              n,
              SDL.audio.freq
            );
          r.connect(SDL.audioContext.destination),
            SDL.fillWebAudioBufferFromHeap(e, n, o),
            (r.buffer = o);
          (o = SDL.audioContext.currentTime),
            (o = Math.max(
              o + SDL.audio.bufferingDelay,
              SDL.audio.nextPlayTime
            ));
          void 0 !== r.start ? r.start(o) : void 0 !== r.noteOn && r.noteOn(o),
            (SDL.audio.nextPlayTime = o + SDL.audio.bufferDurationSecs);
        } catch (e) {
          out("Web Audio API error playing back audio: " + e.toString());
        }
      }),
      t &&
        ((HEAP32[t >> 2] = SDL.audio.freq),
        (HEAP16[(t + 4) >> 1] = SDL.audio.format),
        (HEAP8[(t + 6) >> 0] = SDL.audio.channels),
        (HEAP8[(t + 7) >> 0] = SDL.audio.silence),
        (HEAP16[(t + 8) >> 1] = SDL.audio.samples),
        (HEAPU32[(t + 16) >> 2] = SDL.audio.callback),
        (HEAPU32[(t + 20) >> 2] = SDL.audio.userdata)),
      SDL.allocateChannels(32);
  } catch (e) {
    out(
      'Initializing SDL audio threw an exception: "' +
        e.toString() +
        '"! Continuing without audio.'
    ),
      (SDL.audio = null),
      SDL.allocateChannels(0),
      t &&
        ((HEAP32[t >> 2] = 0),
        (HEAP16[(t + 4) >> 1] = 0),
        (HEAP8[(t + 6) >> 0] = 0),
        (HEAP8[(t + 7) >> 0] = 0),
        (HEAP16[(t + 8) >> 1] = 0),
        (HEAPU32[(t + 16) >> 2] = 0),
        (HEAPU32[(t + 20) >> 2] = 0));
  }
  return SDL.audio ? 0 : -1;
}
function _SDL_PauseAudio(e) {
  SDL.audio &&
    (e
      ? void 0 !== SDL.audio.timer &&
        (clearTimeout(SDL.audio.timer),
        (SDL.audio.numAudioTimersPending = 0),
        (SDL.audio.timer = void 0))
      : SDL.audio.timer ||
        ((SDL.audio.numAudioTimersPending = 1),
        (SDL.audio.timer = safeSetTimeout(SDL.audio.caller, 1))),
    (SDL.audio.paused = e));
}
function _SDL_AudioQuit() {
  for (var e = 0; e < SDL.numChannels; ++e) {
    var t = SDL.channels[e];
    t.audio && (t.audio.pause(), (t.audio = void 0));
  }
  var n = SDL.music.audio;
  n && n.pause(), (SDL.music.audio = void 0);
}
function _SDL_Quit() {
  _SDL_AudioQuit(), out("SDL_Quit called (and ignored)");
}
function ___assert_fail(e, t, n, r) {
  abort(
    "Assertion failed: " +
      UTF8ToString(e) +
      ", at: " +
      [
        t ? UTF8ToString(t) : "unknown filename",
        n,
        r ? UTF8ToString(r) : "unknown function",
      ]
  );
}
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt: function (e, t, n) {
    if (PATH.isAbs(t)) return t;
    var r;
    if (-100 === e) r = FS.cwd();
    else {
      e = FS.getStream(e);
      if (!e) throw new FS.ErrnoError(8);
      r = e.path;
    }
    if (0 != t.length) return PATH.join2(r, t);
    if (!n) throw new FS.ErrnoError(44);
    return r;
  },
  doStat: function (e, t, n) {
    try {
      var r = e(t);
    } catch (e) {
      if (
        e &&
        e.node &&
        PATH.normalize(t) !== PATH.normalize(FS.getPath(e.node))
      )
        return -54;
      throw e;
    }
    return (
      (HEAP32[n >> 2] = r.dev),
      (HEAP32[(n + 4) >> 2] = 0),
      (HEAP32[(n + 8) >> 2] = r.ino),
      (HEAP32[(n + 12) >> 2] = r.mode),
      (HEAP32[(n + 16) >> 2] = r.nlink),
      (HEAP32[(n + 20) >> 2] = r.uid),
      (HEAP32[(n + 24) >> 2] = r.gid),
      (HEAP32[(n + 28) >> 2] = r.rdev),
      (HEAP32[(n + 32) >> 2] = 0),
      (tempI64 = [
        r.size >>> 0,
        ((tempDouble = r.size),
        1 <= +Math.abs(tempDouble)
          ? 0 < tempDouble
            ? (0 |
                Math.min(+Math.floor(tempDouble / 4294967296), 4294967295)) >>>
              0
            : ~~+Math.ceil((tempDouble - (~~tempDouble >>> 0)) / 4294967296) >>>
              0
          : 0),
      ]),
      (HEAP32[(n + 40) >> 2] = tempI64[0]),
      (HEAP32[(n + 44) >> 2] = tempI64[1]),
      (HEAP32[(n + 48) >> 2] = 4096),
      (HEAP32[(n + 52) >> 2] = r.blocks),
      (HEAP32[(n + 56) >> 2] = (r.atime.getTime() / 1e3) | 0),
      (HEAP32[(n + 60) >> 2] = 0),
      (HEAP32[(n + 64) >> 2] = (r.mtime.getTime() / 1e3) | 0),
      (HEAP32[(n + 68) >> 2] = 0),
      (HEAP32[(n + 72) >> 2] = (r.ctime.getTime() / 1e3) | 0),
      (HEAP32[(n + 76) >> 2] = 0),
      (tempI64 = [
        r.ino >>> 0,
        ((tempDouble = r.ino),
        1 <= +Math.abs(tempDouble)
          ? 0 < tempDouble
            ? (0 |
                Math.min(+Math.floor(tempDouble / 4294967296), 4294967295)) >>>
              0
            : ~~+Math.ceil((tempDouble - (~~tempDouble >>> 0)) / 4294967296) >>>
              0
          : 0),
      ]),
      (HEAP32[(n + 80) >> 2] = tempI64[0]),
      (HEAP32[(n + 84) >> 2] = tempI64[1]),
      0
    );
  },
  doMsync: function (e, t, n, r, o) {
    e = HEAPU8.slice(e, e + n);
    FS.msync(t, e, o, n, r);
  },
  varargs: void 0,
  get: function () {
    return (SYSCALLS.varargs += 4), HEAP32[(SYSCALLS.varargs - 4) >> 2];
  },
  getStr: function (e) {
    return UTF8ToString(e);
  },
  getStreamFromFD: function (e) {
    e = FS.getStream(e);
    if (!e) throw new FS.ErrnoError(8);
    return e;
  },
};
function ___syscall_faccessat(e, t, n, r) {
  try {
    if (((t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t)), -8 & n))
      return -28;
    var o = FS.lookupPath(t, { follow: !0 }).node;
    if (!o) return -44;
    var a = "";
    return (
      4 & n && (a += "r"),
      2 & n && (a += "w"),
      1 & n && (a += "x"),
      a && FS.nodePermissions(o, a) ? -2 : 0
    );
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function setErrNo(e) {
  return (HEAP32[___errno_location() >> 2] = e);
}
function ___syscall_fcntl64(e, t, n) {
  SYSCALLS.varargs = n;
  try {
    var r = SYSCALLS.getStreamFromFD(e);
    switch (t) {
      case 0:
        return (o = SYSCALLS.get()) < 0 ? -28 : FS.createStream(r, o).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return r.flags;
      case 4:
        var o = SYSCALLS.get();
        return (r.flags |= o), 0;
      case 5:
        o = SYSCALLS.get();
        return (HEAP16[(o + 0) >> 1] = 2), 0;
      case 6:
      case 7:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return setErrNo(28), -1;
      default:
        return -28;
    }
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_getdents64(e, t, n) {
  try {
    var r = SYSCALLS.getStreamFromFD(e);
    r.getdents || (r.getdents = FS.readdir(r.path));
    for (
      var o = 0, a = FS.llseek(r, 0, 1), s = Math.floor(a / 280);
      s < r.getdents.length && o + 280 <= n;

    ) {
      var i,
        u,
        l = r.getdents[s];
      (u =
        "." === l
          ? ((i = r.node.id), 4)
          : ".." === l
          ? ((i = FS.lookupPath(r.path, { parent: !0 }).node.id), 4)
          : ((i = (u = FS.lookupNode(r.node, l)).id),
            FS.isChrdev(u.mode)
              ? 2
              : FS.isDir(u.mode)
              ? 4
              : FS.isLink(u.mode)
              ? 10
              : 8)),
        (tempI64 = [
          i >>> 0,
          ((tempDouble = i),
          1 <= +Math.abs(tempDouble)
            ? 0 < tempDouble
              ? (0 |
                  Math.min(
                    +Math.floor(tempDouble / 4294967296),
                    4294967295
                  )) >>>
                0
              : ~~+Math.ceil(
                  (tempDouble - (~~tempDouble >>> 0)) / 4294967296
                ) >>> 0
            : 0),
        ]),
        (HEAP32[(t + o) >> 2] = tempI64[0]),
        (HEAP32[(t + o + 4) >> 2] = tempI64[1]),
        (tempI64 = [
          (280 * (s + 1)) >>> 0,
          ((tempDouble = 280 * (s + 1)),
          1 <= +Math.abs(tempDouble)
            ? 0 < tempDouble
              ? (0 |
                  Math.min(
                    +Math.floor(tempDouble / 4294967296),
                    4294967295
                  )) >>>
                0
              : ~~+Math.ceil(
                  (tempDouble - (~~tempDouble >>> 0)) / 4294967296
                ) >>> 0
            : 0),
        ]),
        (HEAP32[(t + o + 8) >> 2] = tempI64[0]),
        (HEAP32[(t + o + 12) >> 2] = tempI64[1]),
        (HEAP16[(t + o + 16) >> 1] = 280),
        (HEAP8[(t + o + 18) >> 0] = u),
        stringToUTF8(l, t + o + 19, 256),
        (o += 280),
        (s += 1);
    }
    return FS.llseek(r, 280 * s, 0), o;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(e, t, n) {
  SYSCALLS.varargs = n;
  try {
    var r = SYSCALLS.getStreamFromFD(e);
    switch (t) {
      case 21509:
      case 21505:
        return r.tty ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return r.tty ? 0 : -59;
      case 21519:
        if (!r.tty) return -59;
        var o = SYSCALLS.get();
        return (HEAP32[o >> 2] = 0);
      case 21520:
        return r.tty ? -28 : -59;
      case 21531:
        o = SYSCALLS.get();
        return FS.ioctl(r, t, o);
      case 21523:
      case 21524:
        return r.tty ? 0 : -59;
      default:
        abort("bad ioctl syscall " + t);
    }
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_mkdirat(e, t, n) {
  try {
    return (
      (t = SYSCALLS.getStr(t)),
      (t = SYSCALLS.calculateAt(e, t)),
      "/" === (t = PATH.normalize(t))[t.length - 1] &&
        (t = t.substr(0, t.length - 1)),
      FS.mkdir(t, n, 0),
      0
    );
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(e, t, n, r) {
  SYSCALLS.varargs = r;
  try {
    (t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t));
    var o = r ? SYSCALLS.get() : 0;
    return FS.open(t, n, o).fd;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_renameat(e, t, n, r) {
  try {
    return (
      (t = SYSCALLS.getStr(t)),
      (r = SYSCALLS.getStr(r)),
      (t = SYSCALLS.calculateAt(e, t)),
      (r = SYSCALLS.calculateAt(n, r)),
      FS.rename(t, r),
      0
    );
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_rmdir(e) {
  try {
    return (e = SYSCALLS.getStr(e)), FS.rmdir(e), 0;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_stat64(e, t) {
  try {
    return (e = SYSCALLS.getStr(e)), SYSCALLS.doStat(FS.stat, e, t);
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function ___syscall_unlinkat(e, t, n) {
  try {
    return (
      (t = SYSCALLS.getStr(t)),
      (t = SYSCALLS.calculateAt(e, t)),
      0 === n
        ? FS.unlink(t)
        : 512 === n
        ? FS.rmdir(t)
        : abort("Invalid flags passed to unlinkat"),
      0
    );
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
}
function __emscripten_date_now() {
  return Date.now();
}
function __localtime_js(e, t) {
  var n = new Date(1e3 * HEAP32[e >> 2]);
  (HEAP32[t >> 2] = n.getSeconds()),
    (HEAP32[(t + 4) >> 2] = n.getMinutes()),
    (HEAP32[(t + 8) >> 2] = n.getHours()),
    (HEAP32[(t + 12) >> 2] = n.getDate()),
    (HEAP32[(t + 16) >> 2] = n.getMonth()),
    (HEAP32[(t + 20) >> 2] = n.getFullYear() - 1900),
    (HEAP32[(t + 24) >> 2] = n.getDay());
  var r = new Date(n.getFullYear(), 0, 1),
    e = ((n.getTime() - r.getTime()) / 864e5) | 0;
  (HEAP32[(t + 28) >> 2] = e),
    (HEAP32[(t + 36) >> 2] = -60 * n.getTimezoneOffset());
  (e = new Date(n.getFullYear(), 6, 1).getTimezoneOffset()),
    (r = r.getTimezoneOffset()),
    (e = 0 | (e != r && n.getTimezoneOffset() == Math.min(r, e)));
  HEAP32[(t + 32) >> 2] = e;
}
function __mktime_js(e) {
  var t = new Date(
      HEAP32[(e + 20) >> 2] + 1900,
      HEAP32[(e + 16) >> 2],
      HEAP32[(e + 12) >> 2],
      HEAP32[(e + 8) >> 2],
      HEAP32[(e + 4) >> 2],
      HEAP32[e >> 2],
      0
    ),
    n = HEAP32[(e + 32) >> 2],
    r = t.getTimezoneOffset(),
    o = new Date(t.getFullYear(), 0, 1),
    a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
    s = o.getTimezoneOffset(),
    i = Math.min(s, a);
  n < 0
    ? (HEAP32[(e + 32) >> 2] = Number(a != s && i == r))
    : 0 < n != (i == r) &&
      ((a = Math.max(s, a)),
      (a = 0 < n ? i : a),
      t.setTime(t.getTime() + 6e4 * (a - r))),
    (HEAP32[(e + 24) >> 2] = t.getDay());
  o = ((t.getTime() - o.getTime()) / 864e5) | 0;
  return (
    (HEAP32[(e + 28) >> 2] = o),
    (HEAP32[e >> 2] = t.getSeconds()),
    (HEAP32[(e + 4) >> 2] = t.getMinutes()),
    (HEAP32[(e + 8) >> 2] = t.getHours()),
    (HEAP32[(e + 12) >> 2] = t.getDate()),
    (HEAP32[(e + 16) >> 2] = t.getMonth()),
    (t.getTime() / 1e3) | 0
  );
}
function _tzset_impl(e, t, n) {
  var r = new Date().getFullYear(),
    o = new Date(r, 0, 1),
    a = new Date(r, 6, 1),
    s = o.getTimezoneOffset(),
    i = a.getTimezoneOffset(),
    r = Math.max(s, i);
  function u(e) {
    e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
    return e ? e[1] : "GMT";
  }
  (HEAP32[e >> 2] = 60 * r), (HEAP32[t >> 2] = Number(s != i));
  (o = u(o)), (a = u(a)), (o = allocateUTF8(o)), (a = allocateUTF8(a));
  i < s
    ? ((HEAPU32[n >> 2] = o), (HEAPU32[(n + 4) >> 2] = a))
    : ((HEAPU32[n >> 2] = a), (HEAPU32[(n + 4) >> 2] = o));
}
function __tzset_js(e, t, n) {
  __tzset_js.called || ((__tzset_js.called = !0), _tzset_impl(e, t, n));
}
function _abort() {
  abort("");
}
var readAsmConstArgsArray = [];
function readAsmConstArgs(e, t) {
  var n;
  for (readAsmConstArgsArray.length = 0, t >>= 2; (n = HEAPU8[e++]); )
    (t += (105 != n) & t),
      readAsmConstArgsArray.push(105 == n ? HEAP32[t] : HEAPF64[t++ >> 1]),
      ++t;
  return readAsmConstArgsArray;
}
function _emscripten_asm_const_int(e, t, n) {
  n = readAsmConstArgs(t, n);
  return ASM_CONSTS[e].apply(null, n);
}
function _emscripten_cancel_main_loop() {
  Browser.mainLoop.pause(), (Browser.mainLoop.func = null);
}
function _emscripten_memcpy_big(e, t, n) {
  HEAPU8.copyWithin(e, t, t + n);
}
function _emscripten_pause_main_loop() {
  Browser.mainLoop.pause();
}
var JSEvents = {
  inEventHandler: 0,
  removeAllEventListeners: function () {
    for (var e = JSEvents.eventHandlers.length - 1; 0 <= e; --e)
      JSEvents._removeHandler(e);
    (JSEvents.eventHandlers = []), (JSEvents.deferredCalls = []);
  },
  registerRemoveEventListeners: function () {
    JSEvents.removeEventListenersRegistered ||
      (__ATEXIT__.push(JSEvents.removeAllEventListeners),
      (JSEvents.removeEventListenersRegistered = !0));
  },
  deferredCalls: [],
  deferCall: function (e, t, n) {
    for (var r in JSEvents.deferredCalls) {
      var o = JSEvents.deferredCalls[r];
      if (
        o.targetFunction == e &&
        (function (e, t) {
          if (e.length == t.length) {
            for (var n in e) if (e[n] != t[n]) return;
            return 1;
          }
        })(o.argsList, n)
      )
        return;
    }
    JSEvents.deferredCalls.push({
      targetFunction: e,
      precedence: t,
      argsList: n,
    }),
      JSEvents.deferredCalls.sort(function (e, t) {
        return e.precedence < t.precedence;
      });
  },
  removeDeferredCalls: function (e) {
    for (var t = 0; t < JSEvents.deferredCalls.length; ++t)
      JSEvents.deferredCalls[t].targetFunction == e &&
        (JSEvents.deferredCalls.splice(t, 1), --t);
  },
  canPerformEventHandlerRequests: function () {
    return (
      JSEvents.inEventHandler &&
      JSEvents.currentEventHandler.allowsDeferredCalls
    );
  },
  runDeferredCalls: function () {
    if (JSEvents.canPerformEventHandlerRequests())
      for (var e = 0; e < JSEvents.deferredCalls.length; ++e) {
        var t = JSEvents.deferredCalls[e];
        JSEvents.deferredCalls.splice(e, 1),
          --e,
          t.targetFunction.apply(null, t.argsList);
      }
  },
  eventHandlers: [],
  removeAllHandlersOnTarget: function (e, t) {
    for (var n = 0; n < JSEvents.eventHandlers.length; ++n)
      JSEvents.eventHandlers[n].target != e ||
        (t && t != JSEvents.eventHandlers[n].eventTypeString) ||
        JSEvents._removeHandler(n--);
  },
  _removeHandler: function (e) {
    var t = JSEvents.eventHandlers[e];
    t.target.removeEventListener(
      t.eventTypeString,
      t.eventListenerFunc,
      t.useCapture
    ),
      JSEvents.eventHandlers.splice(e, 1);
  },
  registerOrRemoveHandler: function (t) {
    function e(e) {
      ++JSEvents.inEventHandler,
        (JSEvents.currentEventHandler = t),
        JSEvents.runDeferredCalls(),
        t.handlerFunc(e),
        JSEvents.runDeferredCalls(),
        --JSEvents.inEventHandler;
    }
    if (t.callbackfunc)
      (t.eventListenerFunc = e),
        t.target.addEventListener(t.eventTypeString, e, t.useCapture),
        JSEvents.eventHandlers.push(t),
        JSEvents.registerRemoveEventListeners();
    else
      for (var n = 0; n < JSEvents.eventHandlers.length; ++n)
        JSEvents.eventHandlers[n].target == t.target &&
          JSEvents.eventHandlers[n].eventTypeString == t.eventTypeString &&
          JSEvents._removeHandler(n--);
  },
  getNodeNameForTarget: function (e) {
    return e
      ? e == window
        ? "#window"
        : e == screen
        ? "#screen"
        : e && e.nodeName
        ? e.nodeName
        : ""
      : "";
  },
  fullscreenEnabled: function () {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled;
  },
};
function setLetterbox(e, t, n) {
  (e.style.paddingLeft = e.style.paddingRight = n + "px"),
    (e.style.paddingTop = e.style.paddingBottom = t + "px");
}
function maybeCStringToJsString(e) {
  return 2 < e ? UTF8ToString(e) : e;
}
var specialHTMLTargets = [
  0,
  "undefined" != typeof document ? document : 0,
  "undefined" != typeof window ? window : 0,
];
function findEventTarget(e) {
  return (
    (e = maybeCStringToJsString(e)),
    specialHTMLTargets[e] ||
      ("undefined" != typeof document ? document.querySelector(e) : void 0)
  );
}
function findCanvasEventTarget(e) {
  return findEventTarget(e);
}
function _emscripten_set_canvas_element_size(e, t, n) {
  e = findCanvasEventTarget(e);
  return e ? ((e.width = t), (e.height = n), 0) : -4;
}
function _emscripten_get_canvas_element_size(e, t, n) {
  e = findCanvasEventTarget(e);
  if (!e) return -4;
  (HEAP32[t >> 2] = e.width), (HEAP32[n >> 2] = e.height);
}
function getCanvasElementSize(r) {
  return withStackSave(function () {
    var e = stackAlloc(8),
      t = e + 4,
      n = stackAlloc(r.id.length + 1);
    stringToUTF8(r.id, n, r.id.length + 1);
    _emscripten_get_canvas_element_size(n, e, t);
    return [HEAP32[e >> 2], HEAP32[t >> 2]];
  });
}
function setCanvasElementSize(t, n, r) {
  t.controlTransferredOffscreen
    ? withStackSave(function () {
        var e = stackAlloc(t.id.length + 1);
        stringToUTF8(t.id, e, t.id.length + 1),
          _emscripten_set_canvas_element_size(e, n, r);
      })
    : ((t.width = n), (t.height = r));
}
function registerRestoreOldStyle(e) {
  var t = getCanvasElementSize(e),
    n = t[0],
    r = t[1],
    o = e.style.width,
    a = e.style.height,
    s = e.style.backgroundColor,
    i = document.body.style.backgroundColor,
    u = e.style.paddingLeft,
    l = e.style.paddingRight,
    d = e.style.paddingTop,
    c = e.style.paddingBottom,
    f = e.style.marginLeft,
    m = e.style.marginRight,
    _ = e.style.marginTop,
    p = e.style.marginBottom,
    S = document.body.style.margin,
    h = document.documentElement.style.overflow,
    v = document.body.scroll,
    E = e.style.imageRendering;
  function g() {
    document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      (document.removeEventListener("fullscreenchange", g),
      document.removeEventListener("webkitfullscreenchange", g),
      setCanvasElementSize(e, n, r),
      (e.style.width = o),
      (e.style.height = a),
      (e.style.backgroundColor = s),
      i || (document.body.style.backgroundColor = "white"),
      (document.body.style.backgroundColor = i),
      (e.style.paddingLeft = u),
      (e.style.paddingRight = l),
      (e.style.paddingTop = d),
      (e.style.paddingBottom = c),
      (e.style.marginLeft = f),
      (e.style.marginRight = m),
      (e.style.marginTop = _),
      (e.style.marginBottom = p),
      (document.body.style.margin = S),
      (document.documentElement.style.overflow = h),
      (document.body.scroll = v),
      (e.style.imageRendering = E),
      e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, n, r),
      currentFullscreenStrategy.canvasResizedCallback &&
        getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(
          37,
          0,
          currentFullscreenStrategy.canvasResizedCallbackUserData
        ));
  }
  return (
    document.addEventListener("fullscreenchange", g),
    document.addEventListener("webkitfullscreenchange", g),
    g
  );
}
function getBoundingClientRect(e) {
  return specialHTMLTargets.indexOf(e) < 0
    ? e.getBoundingClientRect()
    : { left: 0, top: 0 };
}
function JSEvents_resizeCanvasForFullscreen(e, t) {
  var n = registerRestoreOldStyle(e),
    r = t.softFullscreen ? innerWidth : screen.width,
    o = t.softFullscreen ? innerHeight : screen.height,
    a = getBoundingClientRect(e),
    s = a.width,
    i = a.height,
    u = getCanvasElementSize(e),
    a = u[0],
    u = u[1];
  3 == t.scaleMode
    ? (setLetterbox(e, (o - i) / 2, (r - s) / 2), (r = s), (o = i))
    : 2 == t.scaleMode &&
      (r * u < a * o
        ? (setLetterbox(e, (o - (i = (u * r) / a)) / 2, 0), (o = i))
        : (setLetterbox(e, 0, (r - (l = (a * o) / u)) / 2), (r = l))),
    e.style.backgroundColor || (e.style.backgroundColor = "black"),
    document.body.style.backgroundColor ||
      (document.body.style.backgroundColor = "black"),
    (e.style.width = r + "px"),
    (e.style.height = o + "px"),
    1 == t.filteringMode &&
      ((e.style.imageRendering = "optimizeSpeed"),
      (e.style.imageRendering = "-moz-crisp-edges"),
      (e.style.imageRendering = "-o-crisp-edges"),
      (e.style.imageRendering = "-webkit-optimize-contrast"),
      (e.style.imageRendering = "optimize-contrast"),
      (e.style.imageRendering = "crisp-edges"),
      (e.style.imageRendering = "pixelated"));
  var l = 2 == t.canvasResolutionScaleMode ? devicePixelRatio : 1;
  return (
    0 != t.canvasResolutionScaleMode &&
      (setCanvasElementSize(e, (r = (r * l) | 0), (l = (o * l) | 0)),
      e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, r, l)),
    n
  );
}
function JSEvents_requestFullscreen(e, t) {
  if (
    ((0 == t.scaleMode && 0 == t.canvasResolutionScaleMode) ||
      JSEvents_resizeCanvasForFullscreen(e, t),
    e.requestFullscreen)
  )
    e.requestFullscreen();
  else {
    if (!e.webkitRequestFullscreen)
      return JSEvents.fullscreenEnabled() ? -3 : -1;
    e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
  return (
    (currentFullscreenStrategy = t).canvasResizedCallback &&
      getWasmTableEntry(t.canvasResizedCallback)(
        37,
        0,
        t.canvasResizedCallbackUserData
      ),
    0
  );
}
function doRequestFullscreen(e, t) {
  return JSEvents.fullscreenEnabled()
    ? (e = findEventTarget(e))
      ? e.requestFullscreen || e.webkitRequestFullscreen
        ? JSEvents.canPerformEventHandlerRequests()
          ? JSEvents_requestFullscreen(e, t)
          : t.deferUntilInEventHandler
          ? (JSEvents.deferCall(JSEvents_requestFullscreen, 1, [e, t]), 1)
          : -2
        : -3
      : -4
    : -1;
}
var currentFullscreenStrategy = {};
function _emscripten_request_fullscreen_strategy(e, t, n) {
  return doRequestFullscreen(e, {
    scaleMode: HEAP32[n >> 2],
    canvasResolutionScaleMode: HEAP32[(n + 4) >> 2],
    filteringMode: HEAP32[(n + 8) >> 2],
    deferUntilInEventHandler: t,
    canvasResizedCallback: HEAP32[(n + 12) >> 2],
    canvasResizedCallbackUserData: HEAP32[(n + 16) >> 2],
  });
}
function getHeapMax() {
  return 2147483648;
}
function emscripten_realloc_buffer(e) {
  try {
    return (
      wasmMemory.grow((e - buffer.byteLength + 65535) >>> 16),
      updateGlobalBufferAndViews(wasmMemory.buffer),
      1
    );
  } catch (e) {}
}
function _emscripten_resize_heap(e) {
  var t = HEAPU8.length;
  e >>>= 0;
  var n = getHeapMax();
  if (n < e) return !1;
  for (var r, o, a = 1; a <= 4; a *= 2) {
    var s = t * (1 + 0.2 / a),
      s = Math.min(s, e + 100663296);
    if (
      emscripten_realloc_buffer(
        Math.min(n, (r = Math.max(e, s)) + (((o = 65536) - (r % o)) % o))
      )
    )
      return !0;
  }
  return !1;
}
function _emscripten_resume_main_loop() {
  Browser.mainLoop.resume();
}
function _emscripten_set_main_loop(e, t, n) {
  setMainLoop(getWasmTableEntry(e), t, n);
}
function fillMouseEventData(e, t, n) {
  HEAPF64[e >> 3] = t.timeStamp;
  e >>= 2;
  (HEAP32[2 + e] = t.screenX),
    (HEAP32[3 + e] = t.screenY),
    (HEAP32[4 + e] = t.clientX),
    (HEAP32[5 + e] = t.clientY),
    (HEAP32[6 + e] = t.ctrlKey),
    (HEAP32[7 + e] = t.shiftKey),
    (HEAP32[8 + e] = t.altKey),
    (HEAP32[9 + e] = t.metaKey),
    (HEAP16[2 * e + 20] = t.button),
    (HEAP16[2 * e + 21] = t.buttons),
    (HEAP32[11 + e] = t.movementX),
    (HEAP32[12 + e] = t.movementY);
  n = getBoundingClientRect(n);
  (HEAP32[13 + e] = t.clientX - n.left), (HEAP32[14 + e] = t.clientY - n.top);
}
function registerMouseEventCallback(t, n, e, r, o, a, s) {
  JSEvents.mouseEvent || (JSEvents.mouseEvent = _malloc(72));
  e = {
    target: (t = findEventTarget(t)),
    allowsDeferredCalls:
      "mousemove" != a && "mouseenter" != a && "mouseleave" != a,
    eventTypeString: a,
    callbackfunc: r,
    handlerFunc: function (e) {
      e = e || event;
      fillMouseEventData(JSEvents.mouseEvent, e, t),
        getWasmTableEntry(r)(o, JSEvents.mouseEvent, n) && e.preventDefault();
    },
    useCapture: e,
  };
  JSEvents.registerOrRemoveHandler(e);
}
function _emscripten_set_mousedown_callback_on_thread(e, t, n, r, o) {
  return registerMouseEventCallback(e, t, n, r, 5, "mousedown", o), 0;
}
function _emscripten_set_mousemove_callback_on_thread(e, t, n, r, o) {
  return registerMouseEventCallback(e, t, n, r, 8, "mousemove", o), 0;
}
function _emscripten_set_mouseup_callback_on_thread(e, t, n, r, o) {
  return registerMouseEventCallback(e, t, n, r, 6, "mouseup", o), 0;
}
function registerTouchEventCallback(l, d, e, c, f, t, n) {
  JSEvents.touchEvent || (JSEvents.touchEvent = _malloc(1696));
  e = {
    target: (l = findEventTarget(l)),
    allowsDeferredCalls: "touchstart" == t || "touchend" == t,
    eventTypeString: t,
    callbackfunc: c,
    handlerFunc: function (e) {
      for (var t, n = {}, r = e.touches, o = 0; o < r.length; ++o)
        ((t = r[o]).isChanged = t.onTarget = 0), (n[t.identifier] = t);
      for (o = 0; o < e.changedTouches.length; ++o)
        ((t = e.changedTouches[o]).isChanged = 1), (n[t.identifier] = t);
      for (o = 0; o < e.targetTouches.length; ++o)
        n[e.targetTouches[o].identifier].onTarget = 1;
      var a = JSEvents.touchEvent;
      HEAPF64[a >> 3] = e.timeStamp;
      var s = a >> 2;
      (HEAP32[s + 3] = e.ctrlKey),
        (HEAP32[s + 4] = e.shiftKey),
        (HEAP32[s + 5] = e.altKey),
        (HEAP32[s + 6] = e.metaKey),
        (s += 7);
      var i = getBoundingClientRect(l),
        u = 0;
      for (o in n)
        if (
          ((t = n[o]),
          (HEAP32[s + 0] = t.identifier),
          (HEAP32[s + 1] = t.screenX),
          (HEAP32[s + 2] = t.screenY),
          (HEAP32[s + 3] = t.clientX),
          (HEAP32[s + 4] = t.clientY),
          (HEAP32[s + 5] = t.pageX),
          (HEAP32[s + 6] = t.pageY),
          (HEAP32[s + 7] = t.isChanged),
          (HEAP32[s + 8] = t.onTarget),
          (HEAP32[s + 9] = t.clientX - i.left),
          (HEAP32[s + 10] = t.clientY - i.top),
          (s += 13),
          31 < ++u)
        )
          break;
      (HEAP32[(a + 8) >> 2] = u),
        getWasmTableEntry(c)(f, a, d) && e.preventDefault();
    },
    useCapture: e,
  };
  JSEvents.registerOrRemoveHandler(e);
}
function _emscripten_set_touchcancel_callback_on_thread(e, t, n, r, o) {
  return registerTouchEventCallback(e, t, n, r, 25, "touchcancel", o), 0;
}
function _emscripten_set_touchend_callback_on_thread(e, t, n, r, o) {
  return registerTouchEventCallback(e, t, n, r, 23, "touchend", o), 0;
}
function _emscripten_set_touchmove_callback_on_thread(e, t, n, r, o) {
  return registerTouchEventCallback(e, t, n, r, 24, "touchmove", o), 0;
}
function _emscripten_set_touchstart_callback_on_thread(e, t, n, r, o) {
  return registerTouchEventCallback(e, t, n, r, 22, "touchstart", o), 0;
}
function _fd_close(e) {
  try {
    var t = SYSCALLS.getStreamFromFD(e);
    return FS.close(t), 0;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
}
function doReadv(e, t, n, r) {
  for (var o = 0, a = 0; a < n; a++) {
    var s = HEAPU32[t >> 2],
      i = HEAPU32[(t + 4) >> 2];
    t += 8;
    s = FS.read(e, HEAP8, s, i, r);
    if (s < 0) return -1;
    if (((o += s), s < i)) break;
  }
  return o;
}
function _fd_read(e, t, n, r) {
  try {
    var o = doReadv(SYSCALLS.getStreamFromFD(e), t, n);
    return (HEAP32[r >> 2] = o), 0;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
}
function convertI32PairToI53Checked(e, t) {
  return (t + 2097152) >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN;
}
function _fd_seek(e, t, n, r, o) {
  try {
    var a = convertI32PairToI53Checked(t, n);
    if (isNaN(a)) return 61;
    var s = SYSCALLS.getStreamFromFD(e);
    return (
      FS.llseek(s, a, r),
      (tempI64 = [
        s.position >>> 0,
        ((tempDouble = s.position),
        1 <= +Math.abs(tempDouble)
          ? 0 < tempDouble
            ? (0 |
                Math.min(+Math.floor(tempDouble / 4294967296), 4294967295)) >>>
              0
            : ~~+Math.ceil((tempDouble - (~~tempDouble >>> 0)) / 4294967296) >>>
              0
          : 0),
      ]),
      (HEAP32[o >> 2] = tempI64[0]),
      (HEAP32[(o + 4) >> 2] = tempI64[1]),
      s.getdents && 0 === a && 0 === r && (s.getdents = null),
      0
    );
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
}
function doWritev(e, t, n, r) {
  for (var o = 0, a = 0; a < n; a++) {
    var s = HEAPU32[t >> 2],
      i = HEAPU32[(t + 4) >> 2];
    t += 8;
    i = FS.write(e, HEAP8, s, i, r);
    if (i < 0) return -1;
    o += i;
  }
  return o;
}
function _fd_write(e, t, n, r) {
  try {
    var o = doWritev(SYSCALLS.getStreamFromFD(e), t, n);
    return (HEAPU32[r >> 2] = o), 0;
  } catch (e) {
    if (void 0 === FS || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
}
function __webgl_enable_ANGLE_instanced_arrays(e) {
  var a = e.getExtension("ANGLE_instanced_arrays");
  if (a)
    return (
      (e.vertexAttribDivisor = function (e, t) {
        a.vertexAttribDivisorANGLE(e, t);
      }),
      (e.drawArraysInstanced = function (e, t, n, r) {
        a.drawArraysInstancedANGLE(e, t, n, r);
      }),
      (e.drawElementsInstanced = function (e, t, n, r, o) {
        a.drawElementsInstancedANGLE(e, t, n, r, o);
      }),
      1
    );
}
function __webgl_enable_OES_vertex_array_object(e) {
  var t = e.getExtension("OES_vertex_array_object");
  if (t)
    return (
      (e.createVertexArray = function () {
        return t.createVertexArrayOES();
      }),
      (e.deleteVertexArray = function (e) {
        t.deleteVertexArrayOES(e);
      }),
      (e.bindVertexArray = function (e) {
        t.bindVertexArrayOES(e);
      }),
      (e.isVertexArray = function (e) {
        return t.isVertexArrayOES(e);
      }),
      1
    );
}
function __webgl_enable_WEBGL_draw_buffers(e) {
  var n = e.getExtension("WEBGL_draw_buffers");
  if (n)
    return (
      (e.drawBuffers = function (e, t) {
        n.drawBuffersWEBGL(e, t);
      }),
      1
    );
}
function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(e) {
  return !!(e.dibvbi = e.getExtension(
    "WEBGL_draw_instanced_base_vertex_base_instance"
  ));
}
function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(
  e
) {
  return !!(e.mdibvbi = e.getExtension(
    "WEBGL_multi_draw_instanced_base_vertex_base_instance"
  ));
}
function __webgl_enable_WEBGL_multi_draw(e) {
  return !!(e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw"));
}
var GL = {
  counter: 1,
  buffers: [],
  programs: [],
  framebuffers: [],
  renderbuffers: [],
  textures: [],
  shaders: [],
  vaos: [],
  contexts: [],
  offscreenCanvases: {},
  queries: [],
  samplers: [],
  transformFeedbacks: [],
  syncs: [],
  stringCache: {},
  stringiCache: {},
  unpackAlignment: 4,
  recordError: function (e) {
    GL.lastError || (GL.lastError = e);
  },
  getNewId: function (e) {
    for (var t = GL.counter++, n = e.length; n < t; n++) e[n] = null;
    return t;
  },
  getSource: function (e, t, n, r) {
    for (var o = "", a = 0; a < t; ++a) {
      var s = r ? HEAP32[(r + 4 * a) >> 2] : -1;
      o += UTF8ToString(HEAP32[(n + 4 * a) >> 2], s < 0 ? void 0 : s);
    }
    return o;
  },
  createContext: function (n, e) {
    n.getContextSafariWebGL2Fixed ||
      ((n.getContextSafariWebGL2Fixed = n.getContext),
      (n.getContext = function (e, t) {
        return (
          (t = n.getContextSafariWebGL2Fixed(e, t)),
          ("webgl" == e) == t instanceof WebGLRenderingContext ? t : null
        );
      }));
    var t =
      1 < e.majorVersion ? n.getContext("webgl2", e) : n.getContext("webgl", e);
    return t ? GL.registerContext(t, e) : 0;
  },
  registerContext: function (e, t) {
    var n = GL.getNewId(GL.contexts),
      r = { handle: n, attributes: t, version: t.majorVersion, GLctx: e };
    return (
      e.canvas && (e.canvas.GLctxObject = r),
      (GL.contexts[n] = r),
      (void 0 !== t.enableExtensionsByDefault &&
        !t.enableExtensionsByDefault) ||
        GL.initExtensions(r),
      n
    );
  },
  makeContextCurrent: function (e) {
    return (
      (GL.currentContext = GL.contexts[e]),
      (Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx),
      !(e && !GLctx)
    );
  },
  getContext: function (e) {
    return GL.contexts[e];
  },
  deleteContext: function (e) {
    GL.currentContext === GL.contexts[e] && (GL.currentContext = null),
      "object" == typeof JSEvents &&
        JSEvents.removeAllHandlersOnTarget(GL.contexts[e].GLctx.canvas),
      GL.contexts[e] &&
        GL.contexts[e].GLctx.canvas &&
        (GL.contexts[e].GLctx.canvas.GLctxObject = void 0),
      (GL.contexts[e] = null);
  },
  initExtensions: function (e) {
    var t;
    (e = e || GL.currentContext).initExtensionsDone ||
      ((e.initExtensionsDone = !0),
      __webgl_enable_ANGLE_instanced_arrays((t = e.GLctx)),
      __webgl_enable_OES_vertex_array_object(t),
      __webgl_enable_WEBGL_draw_buffers(t),
      __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(t),
      __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(t),
      2 <= e.version &&
        (t.disjointTimerQueryExt = t.getExtension(
          "EXT_disjoint_timer_query_webgl2"
        )),
      (e.version < 2 || !t.disjointTimerQueryExt) &&
        (t.disjointTimerQueryExt = t.getExtension("EXT_disjoint_timer_query")),
      __webgl_enable_WEBGL_multi_draw(t),
      (t.getSupportedExtensions() || []).forEach(function (e) {
        e.includes("lose_context") || e.includes("debug") || t.getExtension(e);
      }));
  },
};
function _glActiveTexture(e) {
  GLctx.activeTexture(e);
}
function _glAttachShader(e, t) {
  GLctx.attachShader(GL.programs[e], GL.shaders[t]);
}
function _glBindBuffer(e, t) {
  35051 == e
    ? (GLctx.currentPixelPackBufferBinding = t)
    : 35052 == e && (GLctx.currentPixelUnpackBufferBinding = t),
    GLctx.bindBuffer(e, GL.buffers[t]);
}
function _glBindFramebuffer(e, t) {
  GLctx.bindFramebuffer(e, GL.framebuffers[t]);
}
function _glBindRenderbuffer(e, t) {
  GLctx.bindRenderbuffer(e, GL.renderbuffers[t]);
}
function _glBindTexture(e, t) {
  GLctx.bindTexture(e, GL.textures[t]);
}
function _glBlendFunc(e, t) {
  GLctx.blendFunc(e, t);
}
function _glBufferData(e, t, n, r) {
  2 <= GL.currentContext.version
    ? n && t
      ? GLctx.bufferData(e, HEAPU8, r, n, t)
      : GLctx.bufferData(e, t, r)
    : GLctx.bufferData(e, n ? HEAPU8.subarray(n, n + t) : t, r);
}
function _glCheckFramebufferStatus(e) {
  return GLctx.checkFramebufferStatus(e);
}
function _glClear(e) {
  GLctx.clear(e);
}
function _glClearColor(e, t, n, r) {
  GLctx.clearColor(e, t, n, r);
}
function _glCompileShader(e) {
  GLctx.compileShader(GL.shaders[e]);
}
function _glCreateProgram() {
  var e = GL.getNewId(GL.programs),
    t = GLctx.createProgram();
  return (
    (t.name = e),
    (t.maxUniformLength =
      t.maxAttributeLength =
      t.maxUniformBlockNameLength =
        0),
    (t.uniformIdCounter = 1),
    (GL.programs[e] = t),
    e
  );
}
function _glCreateShader(e) {
  var t = GL.getNewId(GL.shaders);
  return (GL.shaders[t] = GLctx.createShader(e)), t;
}
function _glDeleteBuffers(e, t) {
  for (var n = 0; n < e; n++) {
    var r = HEAP32[(t + 4 * n) >> 2],
      o = GL.buffers[r];
    o &&
      (GLctx.deleteBuffer(o),
      (o.name = 0),
      (GL.buffers[r] = null),
      r == GLctx.currentPixelPackBufferBinding &&
        (GLctx.currentPixelPackBufferBinding = 0),
      r == GLctx.currentPixelUnpackBufferBinding &&
        (GLctx.currentPixelUnpackBufferBinding = 0));
  }
}
function _glDeleteFramebuffers(e, t) {
  for (var n = 0; n < e; ++n) {
    var r = HEAP32[(t + 4 * n) >> 2],
      o = GL.framebuffers[r];
    o &&
      (GLctx.deleteFramebuffer(o), (o.name = 0), (GL.framebuffers[r] = null));
  }
}
function _glDeleteRenderbuffers(e, t) {
  for (var n = 0; n < e; n++) {
    var r = HEAP32[(t + 4 * n) >> 2],
      o = GL.renderbuffers[r];
    o &&
      (GLctx.deleteRenderbuffer(o), (o.name = 0), (GL.renderbuffers[r] = null));
  }
}
function _glDeleteTextures(e, t) {
  for (var n = 0; n < e; n++) {
    var r = HEAP32[(t + 4 * n) >> 2],
      o = GL.textures[r];
    o && (GLctx.deleteTexture(o), (o.name = 0), (GL.textures[r] = null));
  }
}
function _glDepthFunc(e) {
  GLctx.depthFunc(e);
}
function _glDepthMask(e) {
  GLctx.depthMask(!!e);
}
function _glDisable(e) {
  GLctx.disable(e);
}
function _glDisableVertexAttribArray(e) {
  GLctx.disableVertexAttribArray(e);
}
function _glDrawArrays(e, t, n) {
  GLctx.drawArrays(e, t, n);
}
function _glEnable(e) {
  GLctx.enable(e);
}
function _glEnableVertexAttribArray(e) {
  GLctx.enableVertexAttribArray(e);
}
function _glFramebufferRenderbuffer(e, t, n, r) {
  GLctx.framebufferRenderbuffer(e, t, n, GL.renderbuffers[r]);
}
function _glFramebufferTexture2D(e, t, n, r, o) {
  GLctx.framebufferTexture2D(e, t, n, GL.textures[r], o);
}
function __glGenObject(e, t, n, r) {
  for (var o = 0; o < e; o++) {
    var a = GLctx[n](),
      s = a && GL.getNewId(r);
    a ? (r[(a.name = s)] = a) : GL.recordError(1282),
      (HEAP32[(t + 4 * o) >> 2] = s);
  }
}
function _glGenBuffers(e, t) {
  __glGenObject(e, t, "createBuffer", GL.buffers);
}
function _glGenFramebuffers(e, t) {
  __glGenObject(e, t, "createFramebuffer", GL.framebuffers);
}
function _glGenRenderbuffers(e, t) {
  __glGenObject(e, t, "createRenderbuffer", GL.renderbuffers);
}
function _glGenTextures(e, t) {
  __glGenObject(e, t, "createTexture", GL.textures);
}
function _glGenerateMipmap(e) {
  GLctx.generateMipmap(e);
}
function _glGetAttribLocation(e, t) {
  return GLctx.getAttribLocation(GL.programs[e], UTF8ToString(t));
}
function writeI53ToI64(e, t) {
  (HEAPU32[e >> 2] = t),
    (HEAPU32[(e + 4) >> 2] = (t - HEAPU32[e >> 2]) / 4294967296);
}
function emscriptenWebGLGet(t, e, n) {
  if (e) {
    var r = void 0;
    switch (t) {
      case 36346:
        r = 1;
        break;
      case 36344:
        return void (0 != n && 1 != n && GL.recordError(1280));
      case 34814:
      case 36345:
        r = 0;
        break;
      case 34466:
        var o = GLctx.getParameter(34467),
          r = o ? o.length : 0;
        break;
      case 33309:
        if (GL.currentContext.version < 2) return void GL.recordError(1282);
        r = 2 * (GLctx.getSupportedExtensions() || []).length;
        break;
      case 33307:
      case 33308:
        if (GL.currentContext.version < 2) return void GL.recordError(1280);
        r = 33307 == t ? 3 : 0;
    }
    if (void 0 === r) {
      var a = GLctx.getParameter(t);
      switch (typeof a) {
        case "number":
          r = a;
          break;
        case "boolean":
          r = a ? 1 : 0;
          break;
        case "string":
          return void GL.recordError(1280);
        case "object":
          if (null === a)
            switch (t) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                r = 0;
                break;
              default:
                return void GL.recordError(1280);
            }
          else {
            if (
              a instanceof Float32Array ||
              a instanceof Uint32Array ||
              a instanceof Int32Array ||
              a instanceof Array
            ) {
              for (var s = 0; s < a.length; ++s)
                switch (n) {
                  case 0:
                    HEAP32[(e + 4 * s) >> 2] = a[s];
                    break;
                  case 2:
                    HEAPF32[(e + 4 * s) >> 2] = a[s];
                    break;
                  case 4:
                    HEAP8[(e + s) >> 0] = a[s] ? 1 : 0;
                }
              return;
            }
            try {
              r = 0 | a.name;
            } catch (e) {
              return (
                GL.recordError(1280),
                void err(
                  "GL_INVALID_ENUM in glGet" +
                    n +
                    "v: Unknown object returned from WebGL getParameter(" +
                    t +
                    ")! (error: " +
                    e +
                    ")"
                )
              );
            }
          }
          break;
        default:
          return (
            GL.recordError(1280),
            void err(
              "GL_INVALID_ENUM in glGet" +
                n +
                "v: Native code calling glGet" +
                n +
                "v(" +
                t +
                ") and it returns " +
                a +
                " of type " +
                typeof a +
                "!"
            )
          );
      }
    }
    switch (n) {
      case 1:
        writeI53ToI64(e, r);
        break;
      case 0:
        HEAP32[e >> 2] = r;
        break;
      case 2:
        HEAPF32[e >> 2] = r;
        break;
      case 4:
        HEAP8[e >> 0] = r ? 1 : 0;
    }
  } else GL.recordError(1281);
}
function _glGetIntegerv(e, t) {
  emscriptenWebGLGet(e, t, 0);
}
function _glGetProgramInfoLog(e, t, n, r) {
  e = GLctx.getProgramInfoLog(GL.programs[e]);
  null === e && (e = "(unknown error)");
  t = 0 < t && r ? stringToUTF8(e, r, t) : 0;
  n && (HEAP32[n >> 2] = t);
}
function _glGetProgramiv(e, t, n) {
  if (n)
    if (e >= GL.counter) GL.recordError(1281);
    else if (((e = GL.programs[e]), 35716 == t)) {
      var r = GLctx.getProgramInfoLog(e);
      null === r && (r = "(unknown error)"), (HEAP32[n >> 2] = r.length + 1);
    } else if (35719 == t) {
      if (!e.maxUniformLength)
        for (var o = 0; o < GLctx.getProgramParameter(e, 35718); ++o)
          e.maxUniformLength = Math.max(
            e.maxUniformLength,
            GLctx.getActiveUniform(e, o).name.length + 1
          );
      HEAP32[n >> 2] = e.maxUniformLength;
    } else if (35722 == t) {
      if (!e.maxAttributeLength)
        for (o = 0; o < GLctx.getProgramParameter(e, 35721); ++o)
          e.maxAttributeLength = Math.max(
            e.maxAttributeLength,
            GLctx.getActiveAttrib(e, o).name.length + 1
          );
      HEAP32[n >> 2] = e.maxAttributeLength;
    } else if (35381 == t) {
      if (!e.maxUniformBlockNameLength)
        for (o = 0; o < GLctx.getProgramParameter(e, 35382); ++o)
          e.maxUniformBlockNameLength = Math.max(
            e.maxUniformBlockNameLength,
            GLctx.getActiveUniformBlockName(e, o).length + 1
          );
      HEAP32[n >> 2] = e.maxUniformBlockNameLength;
    } else HEAP32[n >> 2] = GLctx.getProgramParameter(e, t);
  else GL.recordError(1281);
}
function _glGetShaderInfoLog(e, t, n, r) {
  e = GLctx.getShaderInfoLog(GL.shaders[e]);
  null === e && (e = "(unknown error)");
  t = 0 < t && r ? stringToUTF8(e, r, t) : 0;
  n && (HEAP32[n >> 2] = t);
}
function _glGetShaderiv(e, t, n) {
  var r;
  n
    ? 35716 == t
      ? (null === (r = GLctx.getShaderInfoLog(GL.shaders[e])) &&
          (r = "(unknown error)"),
        (r = r ? r.length + 1 : 0),
        (HEAP32[n >> 2] = r))
      : 35720 == t
      ? ((r = (r = GLctx.getShaderSource(GL.shaders[e])) ? r.length + 1 : 0),
        (HEAP32[n >> 2] = r))
      : (HEAP32[n >> 2] = GLctx.getShaderParameter(GL.shaders[e], t))
    : GL.recordError(1281);
}
function jstoi_q(e) {
  return parseInt(e);
}
function webglGetLeftBracePos(e) {
  return "]" == e.slice(-1) && e.lastIndexOf("[");
}
function webglPrepareUniformLocationsBeforeFirstUse(e) {
  var t,
    n,
    r = e.uniformLocsById,
    o = e.uniformSizeAndIdsByName;
  if (!r)
    for (
      e.uniformLocsById = r = {}, e.uniformArrayNamesById = {}, t = 0;
      t < GLctx.getProgramParameter(e, 35718);
      ++t
    ) {
      var a = GLctx.getActiveUniform(e, t),
        s = a.name,
        i = a.size,
        a = webglGetLeftBracePos(s),
        u = 0 < a ? s.slice(0, a) : s,
        l = e.uniformIdCounter;
      for (e.uniformIdCounter += i, o[u] = [i, l], n = 0; n < i; ++n)
        (r[l] = n), (e.uniformArrayNamesById[l++] = u);
    }
}
function _glGetUniformLocation(e, t) {
  if (((t = UTF8ToString(t)), (e = GL.programs[e]))) {
    webglPrepareUniformLocationsBeforeFirstUse(e);
    var n = e.uniformLocsById,
      r = 0,
      o = t,
      a = webglGetLeftBracePos(t);
    0 < a && ((r = jstoi_q(t.slice(a + 1)) >>> 0), (o = t.slice(0, a)));
    o = e.uniformSizeAndIdsByName[o];
    if (
      o &&
      r < o[0] &&
      (n[(r += o[1])] = n[r] || GLctx.getUniformLocation(e, t))
    )
      return r;
  } else GL.recordError(1281);
  return -1;
}
function _glLinkProgram(e) {
  (e = GL.programs[e]),
    GLctx.linkProgram(e),
    (e.uniformLocsById = 0),
    (e.uniformSizeAndIdsByName = {});
}
function computeUnpackAlignedImageSize(e, t, n, r) {
  var o;
  return t * ((e * n + (o = r) - 1) & -o);
}
function __colorChannelsInGlTextureFormat(e) {
  return (
    {
      5: 3,
      6: 4,
      8: 2,
      29502: 3,
      29504: 4,
      26917: 2,
      26918: 2,
      29846: 3,
      29847: 4,
    }[e - 6402] || 1
  );
}
function heapObjectForWebGLType(e) {
  return 0 == (e -= 5120)
    ? HEAP8
    : 1 == e
    ? HEAPU8
    : 2 == e
    ? HEAP16
    : 4 == e
    ? HEAP32
    : 6 == e
    ? HEAPF32
    : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
    ? HEAPU32
    : HEAPU16;
}
function heapAccessShiftForWebGLHeap(e) {
  return 31 - Math.clz32(e.BYTES_PER_ELEMENT);
}
function emscriptenWebGLGetTexPixelData(e, t, n, r, o, a) {
  var s = heapObjectForWebGLType(e),
    i = heapAccessShiftForWebGLHeap(s),
    e = 1 << i,
    e = computeUnpackAlignedImageSize(
      n,
      r,
      __colorChannelsInGlTextureFormat(t) * e,
      GL.unpackAlignment
    );
  return s.subarray(o >> i, (o + e) >> i);
}
function _glReadPixels(e, t, n, r, o, a, s) {
  var i;
  2 <= GL.currentContext.version
    ? GLctx.currentPixelPackBufferBinding
      ? GLctx.readPixels(e, t, n, r, o, a, s)
      : ((i = heapObjectForWebGLType(a)),
        GLctx.readPixels(
          e,
          t,
          n,
          r,
          o,
          a,
          i,
          s >> heapAccessShiftForWebGLHeap(i)
        ))
    : (s = emscriptenWebGLGetTexPixelData(a, o, n, r, s, o))
    ? GLctx.readPixels(e, t, n, r, o, a, s)
    : GL.recordError(1280);
}
function _glRenderbufferStorage(e, t, n, r) {
  GLctx.renderbufferStorage(e, t, n, r);
}
function _glShaderSource(e, t, n, r) {
  r = GL.getSource(e, t, n, r);
  GLctx.shaderSource(GL.shaders[e], r);
}
function _glTexImage2D(e, t, n, r, o, a, s, i, u) {
  var l;
  2 <= GL.currentContext.version
    ? GLctx.currentPixelUnpackBufferBinding
      ? GLctx.texImage2D(e, t, n, r, o, a, s, i, u)
      : u
      ? ((l = heapObjectForWebGLType(i)),
        GLctx.texImage2D(
          e,
          t,
          n,
          r,
          o,
          a,
          s,
          i,
          l,
          u >> heapAccessShiftForWebGLHeap(l)
        ))
      : GLctx.texImage2D(e, t, n, r, o, a, s, i, null)
    : GLctx.texImage2D(
        e,
        t,
        n,
        r,
        o,
        a,
        s,
        i,
        u ? emscriptenWebGLGetTexPixelData(i, s, r, o, u, n) : null
      );
}
function _glTexParameterf(e, t, n) {
  GLctx.texParameterf(e, t, n);
}
function _glTexParameteri(e, t, n) {
  GLctx.texParameteri(e, t, n);
}
function _glTexSubImage2D(e, t, n, r, o, a, s, i, u) {
  var l;
  2 <= GL.currentContext.version
    ? GLctx.currentPixelUnpackBufferBinding
      ? GLctx.texSubImage2D(e, t, n, r, o, a, s, i, u)
      : u
      ? ((l = heapObjectForWebGLType(i)),
        GLctx.texSubImage2D(
          e,
          t,
          n,
          r,
          o,
          a,
          s,
          i,
          l,
          u >> heapAccessShiftForWebGLHeap(l)
        ))
      : GLctx.texSubImage2D(e, t, n, r, o, a, s, i, null)
    : ((l = null),
      u && (l = emscriptenWebGLGetTexPixelData(i, s, o, a, u, 0)),
      GLctx.texSubImage2D(e, t, n, r, o, a, s, i, l));
}
function webglGetUniformLocation(e) {
  var t = GLctx.currentProgram;
  if (t) {
    var n = t.uniformLocsById[e];
    return (
      "number" == typeof n &&
        (t.uniformLocsById[e] = n =
          GLctx.getUniformLocation(
            t,
            t.uniformArrayNamesById[e] + (0 < n ? "[" + n + "]" : "")
          )),
      n
    );
  }
  GL.recordError(1282);
}
function _glUniform1f(e, t) {
  GLctx.uniform1f(webglGetUniformLocation(e), t);
}
function _glUniform1i(e, t) {
  GLctx.uniform1i(webglGetUniformLocation(e), t);
}
function _glUniform2f(e, t, n) {
  GLctx.uniform2f(webglGetUniformLocation(e), t, n);
}
var miniTempWebGLFloatBuffers = [];
function _glUniform3fv(e, t, n) {
  if (2 <= GL.currentContext.version)
    t && GLctx.uniform3fv(webglGetUniformLocation(e), HEAPF32, n >> 2, 3 * t);
  else {
    if (t <= 96)
      for (
        var r = miniTempWebGLFloatBuffers[3 * t - 1], o = 0;
        o < 3 * t;
        o += 3
      )
        (r[o] = HEAPF32[(n + 4 * o) >> 2]),
          (r[o + 1] = HEAPF32[(n + (4 * o + 4)) >> 2]),
          (r[o + 2] = HEAPF32[(n + (4 * o + 8)) >> 2]);
    else r = HEAPF32.subarray(n >> 2, (n + 12 * t) >> 2);
    GLctx.uniform3fv(webglGetUniformLocation(e), r);
  }
}
function _glUniformMatrix4fv(e, t, n, r) {
  if (2 <= GL.currentContext.version)
    t &&
      GLctx.uniformMatrix4fv(
        webglGetUniformLocation(e),
        !!n,
        HEAPF32,
        r >> 2,
        16 * t
      );
  else {
    if (t <= 18) {
      var o = miniTempWebGLFloatBuffers[16 * t - 1],
        a = HEAPF32;
      r >>= 2;
      for (var s = 0; s < 16 * t; s += 16) {
        var i = r + s;
        (o[s] = a[i]),
          (o[s + 1] = a[i + 1]),
          (o[s + 2] = a[i + 2]),
          (o[s + 3] = a[i + 3]),
          (o[s + 4] = a[i + 4]),
          (o[s + 5] = a[i + 5]),
          (o[s + 6] = a[i + 6]),
          (o[s + 7] = a[i + 7]),
          (o[s + 8] = a[i + 8]),
          (o[s + 9] = a[i + 9]),
          (o[s + 10] = a[i + 10]),
          (o[s + 11] = a[i + 11]),
          (o[s + 12] = a[i + 12]),
          (o[s + 13] = a[i + 13]),
          (o[s + 14] = a[i + 14]),
          (o[s + 15] = a[i + 15]);
      }
    } else o = HEAPF32.subarray(r >> 2, (r + 64 * t) >> 2);
    GLctx.uniformMatrix4fv(webglGetUniformLocation(e), !!n, o);
  }
}
function _glUseProgram(e) {
  (e = GL.programs[e]), GLctx.useProgram(e), (GLctx.currentProgram = e);
}
function _glVertexAttribPointer(e, t, n, r, o, a) {
  GLctx.vertexAttribPointer(e, t, n, !!r, o, a);
}
function _glViewport(e, t, n, r) {
  GLctx.viewport(e, t, n, r);
}
function GLFW_Window(e, t, n, r, o, a) {
  (this.id = e),
    (this.x = 0),
    (this.y = 0),
    (this.fullscreen = !1),
    (this.storedX = 0),
    (this.storedY = 0),
    (this.width = t),
    (this.height = n),
    (this.storedWidth = t),
    (this.storedHeight = n),
    (this.title = r),
    (this.monitor = o),
    (this.share = a),
    (this.attributes = GLFW.hints),
    (this.inputModes = { 208897: 212993, 208898: 0, 208899: 0 }),
    (this.buttons = 0),
    (this.keys = new Array()),
    (this.domKeys = new Array()),
    (this.shouldClose = 0),
    (this.title = null),
    (this.windowPosFunc = null),
    (this.windowSizeFunc = null),
    (this.windowCloseFunc = null),
    (this.windowRefreshFunc = null),
    (this.windowFocusFunc = null),
    (this.windowIconifyFunc = null),
    (this.framebufferSizeFunc = null),
    (this.mouseButtonFunc = null),
    (this.cursorPosFunc = null),
    (this.cursorEnterFunc = null),
    (this.scrollFunc = null),
    (this.dropFunc = null),
    (this.keyFunc = null),
    (this.charFunc = null),
    (this.userptr = null);
}
var GLFW = {
  WindowFromId: function (e) {
    return e <= 0 || !GLFW.windows ? null : GLFW.windows[e - 1];
  },
  joystickFunc: null,
  errorFunc: null,
  monitorFunc: null,
  active: null,
  windows: null,
  monitors: null,
  monitorString: null,
  versionString: null,
  initialTime: null,
  extensions: null,
  hints: null,
  defaultHints: {
    131073: 0,
    131074: 0,
    131075: 1,
    131076: 1,
    131077: 1,
    135169: 8,
    135170: 8,
    135171: 8,
    135172: 8,
    135173: 24,
    135174: 8,
    135175: 0,
    135176: 0,
    135177: 0,
    135178: 0,
    135179: 0,
    135180: 0,
    135181: 0,
    135182: 0,
    135183: 0,
    139265: 196609,
    139266: 1,
    139267: 0,
    139268: 0,
    139269: 0,
    139270: 0,
    139271: 0,
    139272: 0,
  },
  DOMToGLFWKeyCode: function (e) {
    switch (e) {
      case 32:
        return 32;
      case 222:
        return 39;
      case 188:
        return 44;
      case 173:
      case 189:
        return 45;
      case 190:
        return 46;
      case 191:
        return 47;
      case 48:
        return 48;
      case 49:
        return 49;
      case 50:
        return 50;
      case 51:
        return 51;
      case 52:
        return 52;
      case 53:
        return 53;
      case 54:
        return 54;
      case 55:
        return 55;
      case 56:
        return 56;
      case 57:
        return 57;
      case 59:
        return 59;
      case 61:
      case 187:
        return 61;
      case 65:
        return 65;
      case 66:
        return 66;
      case 67:
        return 67;
      case 68:
        return 68;
      case 69:
        return 69;
      case 70:
        return 70;
      case 71:
        return 71;
      case 72:
        return 72;
      case 73:
        return 73;
      case 74:
        return 74;
      case 75:
        return 75;
      case 76:
        return 76;
      case 77:
        return 77;
      case 78:
        return 78;
      case 79:
        return 79;
      case 80:
        return 80;
      case 81:
        return 81;
      case 82:
        return 82;
      case 83:
        return 83;
      case 84:
        return 84;
      case 85:
        return 85;
      case 86:
        return 86;
      case 87:
        return 87;
      case 88:
        return 88;
      case 89:
        return 89;
      case 90:
        return 90;
      case 219:
        return 91;
      case 220:
        return 92;
      case 221:
        return 93;
      case 192:
        return 96;
      case 27:
        return 256;
      case 13:
        return 257;
      case 9:
        return 258;
      case 8:
        return 259;
      case 45:
        return 260;
      case 46:
        return 261;
      case 39:
        return 262;
      case 37:
        return 263;
      case 40:
        return 264;
      case 38:
        return 265;
      case 33:
        return 266;
      case 34:
        return 267;
      case 36:
        return 268;
      case 35:
        return 269;
      case 20:
        return 280;
      case 145:
        return 281;
      case 144:
        return 282;
      case 44:
        return 283;
      case 19:
        return 284;
      case 112:
        return 290;
      case 113:
        return 291;
      case 114:
        return 292;
      case 115:
        return 293;
      case 116:
        return 294;
      case 117:
        return 295;
      case 118:
        return 296;
      case 119:
        return 297;
      case 120:
        return 298;
      case 121:
        return 299;
      case 122:
        return 300;
      case 123:
        return 301;
      case 124:
        return 302;
      case 125:
        return 303;
      case 126:
        return 304;
      case 127:
        return 305;
      case 128:
        return 306;
      case 129:
        return 307;
      case 130:
        return 308;
      case 131:
        return 309;
      case 132:
        return 310;
      case 133:
        return 311;
      case 134:
        return 312;
      case 135:
        return 313;
      case 136:
        return 314;
      case 96:
        return 320;
      case 97:
        return 321;
      case 98:
        return 322;
      case 99:
        return 323;
      case 100:
        return 324;
      case 101:
        return 325;
      case 102:
        return 326;
      case 103:
        return 327;
      case 104:
        return 328;
      case 105:
        return 329;
      case 110:
        return 330;
      case 111:
        return 331;
      case 106:
        return 332;
      case 109:
        return 333;
      case 107:
        return 334;
      case 16:
        return 340;
      case 17:
        return 341;
      case 18:
        return 342;
      case 91:
        return 343;
      case 93:
        return 348;
      default:
        return -1;
    }
  },
  getModBits: function (e) {
    var t = 0;
    return (
      e.keys[340] && (t |= 1),
      e.keys[341] && (t |= 2),
      e.keys[342] && (t |= 4),
      e.keys[343] && (t |= 8),
      t
    );
  },
  onKeyPress: function (e) {
    GLFW.active &&
      GLFW.active.charFunc &&
      (e.ctrlKey ||
        e.metaKey ||
        0 == (e = e.charCode) ||
        (0 <= e && e <= 31) ||
        getWasmTableEntry(GLFW.active.charFunc)(GLFW.active.id, e));
  },
  onKeyChanged: function (e, t) {
    var n, r;
    !GLFW.active ||
      (-1 != (n = GLFW.DOMToGLFWKeyCode(e)) &&
        ((r = t && GLFW.active.keys[n]),
        (GLFW.active.keys[n] = t),
        (GLFW.active.domKeys[e] = t),
        GLFW.active.keyFunc &&
          (r && (t = 2),
          getWasmTableEntry(GLFW.active.keyFunc)(
            GLFW.active.id,
            n,
            e,
            t,
            GLFW.getModBits(GLFW.active)
          ))));
  },
  onGamepadConnected: function (e) {
    GLFW.refreshJoysticks();
  },
  onGamepadDisconnected: function (e) {
    GLFW.refreshJoysticks();
  },
  onKeydown: function (e) {
    GLFW.onKeyChanged(e.keyCode, 1),
      (8 !== e.keyCode && 9 !== e.keyCode) || e.preventDefault();
  },
  onKeyup: function (e) {
    GLFW.onKeyChanged(e.keyCode, 0);
  },
  onBlur: function (e) {
    if (GLFW.active)
      for (var t = 0; t < GLFW.active.domKeys.length; ++t)
        GLFW.active.domKeys[t] && GLFW.onKeyChanged(t, 0);
  },
  onMousemove: function (e) {
    GLFW.active &&
      (Browser.calculateMouseEvent(e),
      e.target == Module.canvas &&
        GLFW.active.cursorPosFunc &&
        getWasmTableEntry(GLFW.active.cursorPosFunc)(
          GLFW.active.id,
          Browser.mouseX,
          Browser.mouseY
        ));
  },
  DOMToGLFWMouseButton: function (e) {
    e = e.button;
    return 0 < e && (e = 1 == e ? 2 : 1), e;
  },
  onMouseenter: function (e) {
    GLFW.active &&
      e.target == Module.canvas &&
      GLFW.active.cursorEnterFunc &&
      getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 1);
  },
  onMouseleave: function (e) {
    GLFW.active &&
      e.target == Module.canvas &&
      GLFW.active.cursorEnterFunc &&
      getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 0);
  },
  onMouseButtonChanged: function (e, t) {
    if (
      GLFW.active &&
      (Browser.calculateMouseEvent(e), e.target == Module.canvas)
    ) {
      var n = GLFW.DOMToGLFWMouseButton(e);
      if (1 == t) {
        GLFW.active.buttons |= 1 << n;
        try {
          e.target.setCapture();
        } catch (e) {}
      } else GLFW.active.buttons &= ~(1 << n);
      GLFW.active.mouseButtonFunc &&
        getWasmTableEntry(GLFW.active.mouseButtonFunc)(
          GLFW.active.id,
          n,
          t,
          GLFW.getModBits(GLFW.active)
        );
    }
  },
  onMouseButtonDown: function (e) {
    GLFW.active && GLFW.onMouseButtonChanged(e, 1);
  },
  onMouseButtonUp: function (e) {
    GLFW.active && GLFW.onMouseButtonChanged(e, 0);
  },
  onMouseWheel: function (e) {
    var t,
      n =
        0 == (n = -Browser.getMouseWheelDelta(e))
          ? 0
          : 0 < n
          ? Math.max(n, 1)
          : Math.min(n, -1);
    (GLFW.wheelPos += n),
      GLFW.active &&
        GLFW.active.scrollFunc &&
        e.target == Module.canvas &&
        ((t = 0),
        (n = n),
        (t = "mousewheel" == e.type ? e.wheelDeltaX : e.deltaX),
        getWasmTableEntry(GLFW.active.scrollFunc)(GLFW.active.id, t, n),
        e.preventDefault());
  },
  onCanvasResize: function (e, t) {
    var n;
    GLFW.active &&
      ((n = !0),
      document.fullscreen ||
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen
        ? ((GLFW.active.storedX = GLFW.active.x),
          (GLFW.active.storedY = GLFW.active.y),
          (GLFW.active.storedWidth = GLFW.active.width),
          (GLFW.active.storedHeight = GLFW.active.height),
          (GLFW.active.x = GLFW.active.y = 0),
          (GLFW.active.width = screen.width),
          (GLFW.active.height = screen.height),
          (GLFW.active.fullscreen = !0))
        : 1 == GLFW.active.fullscreen
        ? ((GLFW.active.x = GLFW.active.storedX),
          (GLFW.active.y = GLFW.active.storedY),
          (GLFW.active.width = GLFW.active.storedWidth),
          (GLFW.active.height = GLFW.active.storedHeight),
          (GLFW.active.fullscreen = !1))
        : GLFW.active.width != e || GLFW.active.height != t
        ? ((GLFW.active.width = e), (GLFW.active.height = t))
        : (n = !1),
      n &&
        (Browser.setCanvasSize(GLFW.active.width, GLFW.active.height, !0),
        GLFW.onWindowSizeChanged(),
        GLFW.onFramebufferSizeChanged()));
  },
  onWindowSizeChanged: function () {
    GLFW.active &&
      GLFW.active.windowSizeFunc &&
      callUserCallback(function () {
        getWasmTableEntry(GLFW.active.windowSizeFunc)(
          GLFW.active.id,
          GLFW.active.width,
          GLFW.active.height
        );
      });
  },
  onFramebufferSizeChanged: function () {
    GLFW.active &&
      GLFW.active.framebufferSizeFunc &&
      callUserCallback(function () {
        getWasmTableEntry(GLFW.active.framebufferSizeFunc)(
          GLFW.active.id,
          GLFW.active.width,
          GLFW.active.height
        );
      });
  },
  getTime: function () {
    return _emscripten_get_now() / 1e3;
  },
  setWindowTitle: function (e, t) {
    e = GLFW.WindowFromId(e);
    e &&
      ((e.title = UTF8ToString(t)),
      GLFW.active.id == e.id && (document.title = e.title));
  },
  setJoystickCallback: function (e) {
    (GLFW.joystickFunc = e), GLFW.refreshJoysticks();
  },
  joys: {},
  lastGamepadState: [],
  lastGamepadStateFrame: null,
  refreshJoysticks: function () {
    if (
      Browser.mainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame ||
      !Browser.mainLoop.currentFrameNumber
    ) {
      (GLFW.lastGamepadState = navigator.getGamepads
        ? navigator.getGamepads()
        : navigator.webkitGetGamepads || []),
        (GLFW.lastGamepadStateFrame = Browser.mainLoop.currentFrameNumber);
      for (var e = 0; e < GLFW.lastGamepadState.length; ++e) {
        var t = GLFW.lastGamepadState[e];
        if (t) {
          GLFW.joys[e] ||
            (out("glfw joystick connected:", e),
            (GLFW.joys[e] = {
              id: allocateUTF8(t.id),
              buttonsCount: t.buttons.length,
              axesCount: t.axes.length,
              buttons: _malloc(t.buttons.length),
              axes: _malloc(4 * t.axes.length),
            }),
            GLFW.joystickFunc &&
              getWasmTableEntry(GLFW.joystickFunc)(e, 262145));
          for (var n = GLFW.joys[e], r = 0; r < t.buttons.length; ++r)
            HEAP8[(n.buttons + r) >> 0] = t.buttons[r].pressed;
          for (r = 0; r < t.axes.length; ++r)
            HEAPF32[(n.axes + 4 * r) >> 2] = t.axes[r];
        } else
          GLFW.joys[e] &&
            (out("glfw joystick disconnected", e),
            GLFW.joystickFunc &&
              getWasmTableEntry(GLFW.joystickFunc)(e, 262146),
            _free(GLFW.joys[e].id),
            _free(GLFW.joys[e].buttons),
            _free(GLFW.joys[e].axes),
            delete GLFW.joys[e]);
      }
    }
  },
  setKeyCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.keyFunc;
    return (n.keyFunc = t), e;
  },
  setCharCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.charFunc;
    return (n.charFunc = t), e;
  },
  setMouseButtonCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.mouseButtonFunc;
    return (n.mouseButtonFunc = t), e;
  },
  setCursorPosCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.cursorPosFunc;
    return (n.cursorPosFunc = t), e;
  },
  setScrollCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.scrollFunc;
    return (n.scrollFunc = t), e;
  },
  setDropCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.dropFunc;
    return (n.dropFunc = t), e;
  },
  onDrop: function (e) {
    if (
      GLFW.active &&
      GLFW.active.dropFunc &&
      e.dataTransfer &&
      e.dataTransfer.files &&
      0 != e.dataTransfer.files.length
    ) {
      e.preventDefault();
      var a = _malloc(4 * e.dataTransfer.files.length),
        s = [],
        i = e.dataTransfer.files.length,
        u = 0,
        t = ".glfw_dropped_files";
      FS.createPath("/", t);
      for (var l = 0; l < i; ++l)
        !(function (n) {
          var r = "/" + t + "/" + n.name.replace(/\//g, "_"),
            o = new FileReader();
          (o.onloadend = (e) => {
            if (2 != o.readyState)
              return (
                ++u,
                void out(
                  "failed to read dropped file: " + n.name + ": " + o.error
                )
              );
            e = e.target.result;
            if ((FS.writeFile(r, new Uint8Array(e)), ++u === i)) {
              getWasmTableEntry(GLFW.active.dropFunc)(GLFW.active.id, i, a);
              for (var t = 0; t < s.length; ++t) _free(s[t]);
              _free(a);
            }
          }),
            o.readAsArrayBuffer(n);
          var e = allocateUTF8(r);
          s.push(e), (HEAPU32[(a + 4 * l) >> 2] = e);
        })(e.dataTransfer.files[l]);
      return !1;
    }
  },
  onDragover: function (e) {
    if (GLFW.active && GLFW.active.dropFunc) return e.preventDefault(), !1;
  },
  setWindowSizeCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.windowSizeFunc;
    return (n.windowSizeFunc = t), e;
  },
  setWindowCloseCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.windowCloseFunc;
    return (n.windowCloseFunc = t), e;
  },
  setWindowRefreshCallback: function (e, t) {
    var n = GLFW.WindowFromId(e);
    if (!n) return null;
    e = n.windowRefreshFunc;
    return (n.windowRefreshFunc = t), e;
  },
  onClickRequestPointerLock: function (e) {
    !Browser.pointerLock &&
      Module.canvas.requestPointerLock &&
      (Module.canvas.requestPointerLock(), e.preventDefault());
  },
  setInputMode: function (e, t, n) {
    var r = GLFW.WindowFromId(e);
    if (r)
      switch (t) {
        case 208897:
          switch (n) {
            case 212993:
              (r.inputModes[t] = n),
                Module.canvas.removeEventListener(
                  "click",
                  GLFW.onClickRequestPointerLock,
                  !0
                ),
                Module.canvas.exitPointerLock();
              break;
            case 212994:
              out(
                "glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented."
              );
              break;
            case 212995:
              (r.inputModes[t] = n),
                Module.canvas.addEventListener(
                  "click",
                  GLFW.onClickRequestPointerLock,
                  !0
                ),
                Module.canvas.requestPointerLock();
              break;
            default:
              out(
                "glfwSetInputMode called with unknown value parameter value: " +
                  n +
                  "."
              );
          }
          break;
        case 208898:
          out(
            "glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented."
          );
          break;
        case 208899:
          out(
            "glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented."
          );
          break;
        default:
          out(
            "glfwSetInputMode called with unknown mode parameter value: " +
              t +
              "."
          );
      }
  },
  getKey: function (e, t) {
    e = GLFW.WindowFromId(e);
    return e ? e.keys[t] : 0;
  },
  getMouseButton: function (e, t) {
    e = GLFW.WindowFromId(e);
    return e ? 0 < (e.buttons & (1 << t)) : 0;
  },
  getCursorPos: function (e, t, n) {
    (HEAPF64[t >> 3] = Browser.mouseX), (HEAPF64[n >> 3] = Browser.mouseY);
  },
  getMousePos: function (e, t, n) {
    (HEAP32[t >> 2] = Browser.mouseX), (HEAP32[n >> 2] = Browser.mouseY);
  },
  setCursorPos: function (e, t, n) {},
  getWindowPos: function (e, t, n) {
    var r = 0,
      o = 0,
      e = GLFW.WindowFromId(e);
    e && ((r = e.x), (o = e.y)),
      t && (HEAP32[t >> 2] = r),
      n && (HEAP32[n >> 2] = o);
  },
  setWindowPos: function (e, t, n) {
    e = GLFW.WindowFromId(e);
    e && ((e.x = t), (e.y = n));
  },
  getWindowSize: function (e, t, n) {
    var r = 0,
      o = 0,
      e = GLFW.WindowFromId(e);
    e && ((r = e.width), (o = e.height)),
      t && (HEAP32[t >> 2] = r),
      n && (HEAP32[n >> 2] = o);
  },
  setWindowSize: function (e, t, n) {
    e = GLFW.WindowFromId(e);
    e &&
      (GLFW.active.id == e.id &&
        (t == screen.width && n == screen.height
          ? Browser.requestFullscreen()
          : (Browser.exitFullscreen(),
            Browser.setCanvasSize(t, n),
            (e.width = t),
            (e.height = n))),
      e.windowSizeFunc && getWasmTableEntry(e.windowSizeFunc)(e.id, t, n));
  },
  createWindow: function (e, t, n, r, o) {
    for (
      var a, s = 0;
      s < GLFW.windows.length && null !== GLFW.windows[s];
      s++
    );
    if (0 < s)
      throw "glfwCreateWindow only supports one window at time currently";
    if (((a = s + 1), e <= 0 || t <= 0)) return 0;
    for (
      r ? Browser.requestFullscreen() : Browser.setCanvasSize(e, t), s = 0;
      s < GLFW.windows.length && null == GLFW.windows[s];
      s++
    );
    var i,
      u = 0 < GLFW.hints[139265];
    if (
      (s == GLFW.windows.length &&
        (u
          ? ((i = {
              antialias: 1 < GLFW.hints[135181],
              depth: 0 < GLFW.hints[135173],
              stencil: 0 < GLFW.hints[135174],
              alpha: 0 < GLFW.hints[135172],
            }),
            (Module.ctx = Browser.createContext(Module.canvas, !0, !0, i)))
          : Browser.init()),
      !Module.ctx && u)
    )
      return 0;
    o = new GLFW_Window(a, e, t, n, r, o);
    return (
      a - 1 == GLFW.windows.length
        ? GLFW.windows.push(o)
        : (GLFW.windows[a - 1] = o),
      (GLFW.active = o).id
    );
  },
  destroyWindow: function (e) {
    e = GLFW.WindowFromId(e);
    if (e) {
      e.windowCloseFunc && getWasmTableEntry(e.windowCloseFunc)(e.id),
        (GLFW.windows[e.id - 1] = null),
        GLFW.active.id == e.id && (GLFW.active = null);
      for (var t = 0; t < GLFW.windows.length; t++)
        if (null !== GLFW.windows[t]) return;
      Module.ctx = Browser.destroyContext(Module.canvas, !0, !0);
    }
  },
  swapBuffers: function (e) {},
  GLFW2ParamToGLFW3Param: function (e) {
    return {
      196609: 0,
      196610: 0,
      196611: 0,
      196612: 0,
      196613: 0,
      196614: 0,
      131073: 0,
      131074: 0,
      131075: 0,
      131076: 0,
      131077: 135169,
      131078: 135170,
      131079: 135171,
      131080: 135172,
      131081: 135173,
      131082: 135174,
      131083: 135183,
      131084: 135175,
      131085: 135176,
      131086: 135177,
      131087: 135178,
      131088: 135179,
      131089: 135180,
      131090: 0,
      131091: 135181,
      131092: 139266,
      131093: 139267,
      131094: 139270,
      131095: 139271,
      131096: 139272,
    }[e];
  },
};
function _glfwCreateWindow(e, t, n, r, o) {
  return GLFW.createWindow(e, t, n, r, o);
}
function _glfwGetPrimaryMonitor() {
  return 1;
}
function _glfwGetVideoMode(e) {
  return 0;
}
function _glfwInit() {
  return (
    GLFW.windows ||
      ((GLFW.initialTime = GLFW.getTime()),
      (GLFW.hints = GLFW.defaultHints),
      (GLFW.windows = new Array()),
      (GLFW.active = null),
      window.addEventListener("gamepadconnected", GLFW.onGamepadConnected, !0),
      window.addEventListener(
        "gamepaddisconnected",
        GLFW.onGamepadDisconnected,
        !0
      ),
      window.addEventListener("keydown", GLFW.onKeydown, !0),
      window.addEventListener("keypress", GLFW.onKeyPress, !0),
      window.addEventListener("keyup", GLFW.onKeyup, !0),
      window.addEventListener("blur", GLFW.onBlur, !0),
      Module.canvas.addEventListener("touchmove", GLFW.onMousemove, !0),
      Module.canvas.addEventListener("touchstart", GLFW.onMouseButtonDown, !0),
      Module.canvas.addEventListener("touchcancel", GLFW.onMouseButtonUp, !0),
      Module.canvas.addEventListener("touchend", GLFW.onMouseButtonUp, !0),
      Module.canvas.addEventListener("mousemove", GLFW.onMousemove, !0),
      Module.canvas.addEventListener("mousedown", GLFW.onMouseButtonDown, !0),
      Module.canvas.addEventListener("mouseup", GLFW.onMouseButtonUp, !0),
      Module.canvas.addEventListener("wheel", GLFW.onMouseWheel, !0),
      Module.canvas.addEventListener("mousewheel", GLFW.onMouseWheel, !0),
      Module.canvas.addEventListener("mouseenter", GLFW.onMouseenter, !0),
      Module.canvas.addEventListener("mouseleave", GLFW.onMouseleave, !0),
      Module.canvas.addEventListener("drop", GLFW.onDrop, !0),
      Module.canvas.addEventListener("dragover", GLFW.onDragover, !0),
      Browser.resizeListeners.push(function (e, t) {
        GLFW.onCanvasResize(e, t);
      })),
    1
  );
}
function _glfwMakeContextCurrent(e) {}
function _glfwPollEvents() {}
function _glfwSetClipboardString(e, t) {}
function _glfwSetDropCallback(e, t) {
  return GLFW.setDropCallback(e, t);
}
function _glfwSetErrorCallback(e) {
  var t = GLFW.errorFunc;
  return (GLFW.errorFunc = e), t;
}
function _glfwSetKeyCallback(e, t) {
  return GLFW.setKeyCallback(e, t);
}
function _glfwSetScrollCallback(e, t) {
  return GLFW.setScrollCallback(e, t);
}
function _glfwSetWindowSizeCallback(e, t) {
  return GLFW.setWindowSizeCallback(e, t);
}
function _glfwSwapBuffers(e) {
  GLFW.swapBuffers(e);
}
function _glfwSwapInterval(e) {
  0 == (e = Math.abs(e))
    ? _emscripten_set_main_loop_timing(0, 0)
    : _emscripten_set_main_loop_timing(1, e);
}
function _glfwTerminate() {
  window.removeEventListener("gamepadconnected", GLFW.onGamepadConnected, !0),
    window.removeEventListener(
      "gamepaddisconnected",
      GLFW.onGamepadDisconnected,
      !0
    ),
    window.removeEventListener("keydown", GLFW.onKeydown, !0),
    window.removeEventListener("keypress", GLFW.onKeyPress, !0),
    window.removeEventListener("keyup", GLFW.onKeyup, !0),
    window.removeEventListener("blur", GLFW.onBlur, !0),
    Module.canvas.removeEventListener("touchmove", GLFW.onMousemove, !0),
    Module.canvas.removeEventListener("touchstart", GLFW.onMouseButtonDown, !0),
    Module.canvas.removeEventListener("touchcancel", GLFW.onMouseButtonUp, !0),
    Module.canvas.removeEventListener("touchend", GLFW.onMouseButtonUp, !0),
    Module.canvas.removeEventListener("mousemove", GLFW.onMousemove, !0),
    Module.canvas.removeEventListener("mousedown", GLFW.onMouseButtonDown, !0),
    Module.canvas.removeEventListener("mouseup", GLFW.onMouseButtonUp, !0),
    Module.canvas.removeEventListener("wheel", GLFW.onMouseWheel, !0),
    Module.canvas.removeEventListener("mousewheel", GLFW.onMouseWheel, !0),
    Module.canvas.removeEventListener("mouseenter", GLFW.onMouseenter, !0),
    Module.canvas.removeEventListener("mouseleave", GLFW.onMouseleave, !0),
    Module.canvas.removeEventListener("drop", GLFW.onDrop, !0),
    Module.canvas.removeEventListener("dragover", GLFW.onDragover, !0),
    (Module.canvas.width = Module.canvas.height = 1),
    (GLFW.windows = null),
    (GLFW.active = null);
}
function _glfwWindowHint(e, t) {
  GLFW.hints[e] = t;
}
var FSNode = function (e, t, n, r) {
    (e = e || this),
      (this.parent = e),
      (this.mount = e.mount),
      (this.mounted = null),
      (this.id = FS.nextInode++),
      (this.name = t),
      (this.mode = n),
      (this.node_ops = {}),
      (this.stream_ops = {}),
      (this.rdev = r);
  },
  readMode = 365,
  writeMode = 146;
Object.defineProperties(FSNode.prototype, {
  read: {
    get: function () {
      return (this.mode & readMode) === readMode;
    },
    set: function (e) {
      e ? (this.mode |= readMode) : (this.mode &= ~readMode);
    },
  },
  write: {
    get: function () {
      return (this.mode & writeMode) === writeMode;
    },
    set: function (e) {
      e ? (this.mode |= writeMode) : (this.mode &= ~writeMode);
    },
  },
  isFolder: {
    get: function () {
      return FS.isDir(this.mode);
    },
  },
  isDevice: {
    get: function () {
      return FS.isChrdev(this.mode);
    },
  },
}),
  (FS.FSNode = FSNode),
  FS.staticInit(),
  (Module.FS_createPath = FS.createPath),
  (Module.FS_createDataFile = FS.createDataFile),
  (Module.FS_createPreloadedFile = FS.createPreloadedFile),
  (Module.FS_unlink = FS.unlink),
  (Module.FS_createLazyFile = FS.createLazyFile),
  (Module.FS_createDevice = FS.createDevice),
  (Module.requestFullscreen = function (e, t) {
    Browser.requestFullscreen(e, t);
  }),
  (Module.requestAnimationFrame = function (e) {
    Browser.requestAnimationFrame(e);
  }),
  (Module.setCanvasSize = function (e, t, n) {
    Browser.setCanvasSize(e, t, n);
  }),
  (Module.pauseMainLoop = function () {
    Browser.mainLoop.pause();
  }),
  (Module.resumeMainLoop = function () {
    Browser.mainLoop.resume();
  }),
  (Module.getUserMedia = function () {
    Browser.getUserMedia();
  }),
  (Module.createContext = function (e, t, n, r) {
    return Browser.createContext(e, t, n, r);
  });
for (
  var GLctx,
    preloadedImages = {},
    preloadedAudios = {},
    miniTempWebGLFloatBuffersStorage = new Float32Array(288),
    i = 0;
  i < 288;
  ++i
)
  miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(
    0,
    i + 1
  );
function intArrayFromString(e, t, n) {
  (n = 0 < n ? n : lengthBytesUTF8(e) + 1),
    (n = new Array(n)),
    (e = stringToUTF8Array(e, n, 0, n.length));
  return t && (n.length = e), n;
}
var calledRun,
  asmLibraryArg = {
    Ka: _SDL_GetNumAudioDrivers,
    La: _SDL_Init,
    Ja: _SDL_OpenAudio,
    O: _SDL_PauseAudio,
    Ia: _SDL_Quit,
    a: ___assert_fail,
    lb: ___syscall_faccessat,
    da: ___syscall_fcntl64,
    cb: ___syscall_getdents64,
    fb: ___syscall_ioctl,
    db: ___syscall_mkdirat,
    ea: ___syscall_openat,
    $a: ___syscall_renameat,
    ab: ___syscall_rmdir,
    _a: ___syscall_stat64,
    bb: ___syscall_unlinkat,
    gb: __emscripten_date_now,
    hb: __localtime_js,
    ib: __mktime_js,
    jb: __tzset_js,
    ba: _abort,
    e: _emscripten_asm_const_int,
    ia: _emscripten_cancel_main_loop,
    kb: _emscripten_memcpy_big,
    Ca: _emscripten_pause_main_loop,
    Da: _emscripten_request_fullscreen_strategy,
    Za: _emscripten_resize_heap,
    Ba: _emscripten_resume_main_loop,
    ha: _emscripten_set_main_loop,
    za: _emscripten_set_mousedown_callback_on_thread,
    Aa: _emscripten_set_mousemove_callback_on_thread,
    ya: _emscripten_set_mouseup_callback_on_thread,
    ta: _emscripten_set_touchcancel_callback_on_thread,
    va: _emscripten_set_touchend_callback_on_thread,
    ua: _emscripten_set_touchmove_callback_on_thread,
    xa: _emscripten_set_touchstart_callback_on_thread,
    S: _exit,
    M: _fd_close,
    eb: _fd_read,
    Ya: _fd_seek,
    ca: _fd_write,
    T: get_device_pixel_ratio,
    J: get_hostname,
    Ma: get_url_level_index,
    v: _glActiveTexture,
    $: _glAttachShader,
    l: _glBindBuffer,
    o: _glBindFramebuffer,
    p: _glBindRenderbuffer,
    d: _glBindTexture,
    Oa: _glBlendFunc,
    u: _glBufferData,
    W: _glCheckFramebufferStatus,
    t: _glClear,
    E: _glClearColor,
    Va: _glCompileShader,
    Ta: _glCreateProgram,
    Xa: _glCreateShader,
    P: _glDeleteBuffers,
    F: _glDeleteFramebuffers,
    B: _glDeleteRenderbuffers,
    R: _glDeleteTextures,
    Pa: _glDepthFunc,
    q: _glDepthMask,
    c: _glDisable,
    h: _glDisableVertexAttribArray,
    s: _glDrawArrays,
    b: _glEnable,
    k: _glEnableVertexAttribArray,
    w: _glFramebufferRenderbuffer,
    X: _glFramebufferTexture2D,
    G: _glGenBuffers,
    H: _glGenFramebuffers,
    y: _glGenRenderbuffers,
    I: _glGenTextures,
    U: _glGenerateMipmap,
    i: _glGetAttribLocation,
    r: _glGetIntegerv,
    Ra: _glGetProgramInfoLog,
    _: _glGetProgramiv,
    Ua: _glGetShaderInfoLog,
    aa: _glGetShaderiv,
    n: _glGetUniformLocation,
    Sa: _glLinkProgram,
    V: _glReadPixels,
    x: _glRenderbufferStorage,
    Wa: _glShaderSource,
    D: _glTexImage2D,
    j: _glTexParameterf,
    K: _glTexParameteri,
    Qa: _glTexSubImage2D,
    Z: _glUniform1f,
    L: _glUniform1i,
    C: _glUniform2f,
    z: _glUniform3fv,
    g: _glUniformMatrix4fv,
    A: _glUseProgram,
    f: _glVertexAttribPointer,
    m: _glViewport,
    oa: _glfwCreateWindow,
    qa: _glfwGetPrimaryMonitor,
    pa: _glfwGetVideoMode,
    ra: _glfwInit,
    na: _glfwMakeContextCurrent,
    Fa: _glfwPollEvents,
    Ea: _glfwSetClipboardString,
    ka: _glfwSetDropCallback,
    sa: _glfwSetErrorCallback,
    ma: _glfwSetKeyCallback,
    la: _glfwSetScrollCallback,
    ja: _glfwSetWindowSizeCallback,
    Ha: _glfwSwapBuffers,
    ga: _glfwSwapInterval,
    fa: _glfwTerminate,
    N: _glfwWindowHint,
    Ga: is_daily_reward_possible,
    wa: is_latest_browser_tab,
    Q: poki_gameplay_start,
    Na: poki_gameplay_stop,
    Y: poki_level_start,
    mb: set_latest_browser_tab,
  },
  asm = createWasm(),
  ___wasm_call_ctors = (Module.___wasm_call_ctors = function () {
    return (___wasm_call_ctors = Module.___wasm_call_ctors =
      Module.asm.ob).apply(null, arguments);
  }),
  _app_fetch_url_done = (Module._app_fetch_url_done = function () {
    return (_app_fetch_url_done = Module._app_fetch_url_done =
      Module.asm.pb).apply(null, arguments);
  }),
  _app_webview_message = (Module._app_webview_message = function () {
    return (_app_webview_message = Module._app_webview_message =
      Module.asm.qb).apply(null, arguments);
  }),
  _app_error = (Module._app_error = function () {
    return (_app_error = Module._app_error = Module.asm.rb).apply(
      null,
      arguments
    );
  }),
  _free = (Module._free = function () {
    return (_free = Module._free = Module.asm.sb).apply(null, arguments);
  }),
  _malloc = (Module._malloc = function () {
    return (_malloc = Module._malloc = Module.asm.tb).apply(null, arguments);
  }),
  _memcpy = (Module._memcpy = function () {
    return (_memcpy = Module._memcpy = Module.asm.ub).apply(null, arguments);
  }),
  _app_pause = (Module._app_pause = function () {
    return (_app_pause = Module._app_pause = Module.asm.vb).apply(
      null,
      arguments
    );
  }),
  _app_resume = (Module._app_resume = function () {
    return (_app_resume = Module._app_resume = Module.asm.wb).apply(
      null,
      arguments
    );
  }),
  _app_on_signin = (Module._app_on_signin = function () {
    return (_app_on_signin = Module._app_on_signin = Module.asm.xb).apply(
      null,
      arguments
    );
  }),
  _app_on_signout = (Module._app_on_signout = function () {
    return (_app_on_signout = Module._app_on_signout = Module.asm.yb).apply(
      null,
      arguments
    );
  }),
  _notification_show_inapp = (Module._notification_show_inapp = function () {
    return (_notification_show_inapp = Module._notification_show_inapp =
      Module.asm.zb).apply(null, arguments);
  }),
  _app_set_opengl_context_lost = (Module._app_set_opengl_context_lost =
    function () {
      return (_app_set_opengl_context_lost =
        Module._app_set_opengl_context_lost =
          Module.asm.Ab).apply(null, arguments);
    }),
  _opengl_resume = (Module._opengl_resume = function () {
    return (_opengl_resume = Module._opengl_resume = Module.asm.Bb).apply(
      null,
      arguments
    );
  }),
  _app_init = (Module._app_init = function () {
    return (_app_init = Module._app_init = Module.asm.Cb).apply(
      null,
      arguments
    );
  }),
  _game_download_finished = (Module._game_download_finished = function () {
    return (_game_download_finished = Module._game_download_finished =
      Module.asm.Db).apply(null, arguments);
  }),
  _menu_query_games_add_result = (Module._menu_query_games_add_result =
    function () {
      return (_menu_query_games_add_result =
        Module._menu_query_games_add_result =
          Module.asm.Eb).apply(null, arguments);
    }),
  _menu_query_games_finished = (Module._menu_query_games_finished =
    function () {
      return (_menu_query_games_finished = Module._menu_query_games_finished =
        Module.asm.Fb).apply(null, arguments);
    }),
  _menu_read_game_finished = (Module._menu_read_game_finished = function () {
    return (_menu_read_game_finished = Module._menu_read_game_finished =
      Module.asm.Gb).apply(null, arguments);
  }),
  _menu_read_counts_finished = (Module._menu_read_counts_finished =
    function () {
      return (_menu_read_counts_finished = Module._menu_read_counts_finished =
        Module.asm.Hb).apply(null, arguments);
    }),
  _menu_read_ledger_finished = (Module._menu_read_ledger_finished =
    function () {
      return (_menu_read_ledger_finished = Module._menu_read_ledger_finished =
        Module.asm.Ib).apply(null, arguments);
    }),
  _menu_write_ledger_finished = (Module._menu_write_ledger_finished =
    function () {
      return (_menu_write_ledger_finished = Module._menu_write_ledger_finished =
        Module.asm.Jb).apply(null, arguments);
    }),
  _menu_read_gems_finished = (Module._menu_read_gems_finished = function () {
    return (_menu_read_gems_finished = Module._menu_read_gems_finished =
      Module.asm.Kb).apply(null, arguments);
  }),
  _state_menu_deeplink_stop = (Module._state_menu_deeplink_stop = function () {
    return (_state_menu_deeplink_stop = Module._state_menu_deeplink_stop =
      Module.asm.Lb).apply(null, arguments);
  }),
  _menu_file_upload_finished = (Module._menu_file_upload_finished =
    function () {
      return (_menu_file_upload_finished = Module._menu_file_upload_finished =
        Module.asm.Mb).apply(null, arguments);
    }),
  _share_file_finished = (Module._share_file_finished = function () {
    return (_share_file_finished = Module._share_file_finished =
      Module.asm.Nb).apply(null, arguments);
  }),
  _iap_cancelled = (Module._iap_cancelled = function () {
    return (_iap_cancelled = Module._iap_cancelled = Module.asm.Ob).apply(
      null,
      arguments
    );
  }),
  _state_menu_payout_add = (Module._state_menu_payout_add = function () {
    return (_state_menu_payout_add = Module._state_menu_payout_add =
      Module.asm.Pb).apply(null, arguments);
  }),
  _state_menu_payout_stop = (Module._state_menu_payout_stop = function () {
    return (_state_menu_payout_stop = Module._state_menu_payout_stop =
      Module.asm.Qb).apply(null, arguments);
  }),
  _menu_on_password_reset_email_sent =
    (Module._menu_on_password_reset_email_sent = function () {
      return (_menu_on_password_reset_email_sent =
        Module._menu_on_password_reset_email_sent =
          Module.asm.Rb).apply(null, arguments);
    }),
  _menu_sync_upload_finished = (Module._menu_sync_upload_finished =
    function () {
      return (_menu_sync_upload_finished = Module._menu_sync_upload_finished =
        Module.asm.Sb).apply(null, arguments);
    }),
  _menu_sync_download_finished = (Module._menu_sync_download_finished =
    function () {
      return (_menu_sync_download_finished =
        Module._menu_sync_download_finished =
          Module.asm.Tb).apply(null, arguments);
    }),
  _ad_on_inited = (Module._ad_on_inited = function () {
    return (_ad_on_inited = Module._ad_on_inited = Module.asm.Vb).apply(
      null,
      arguments
    );
  }),
  _ad_interstitial_on_loaded = (Module._ad_interstitial_on_loaded =
    function () {
      return (_ad_interstitial_on_loaded = Module._ad_interstitial_on_loaded =
        Module.asm.Wb).apply(null, arguments);
    }),
  _ad_interstitial_on_showed = (Module._ad_interstitial_on_showed =
    function () {
      return (_ad_interstitial_on_showed = Module._ad_interstitial_on_showed =
        Module.asm.Xb).apply(null, arguments);
    }),
  _ad_rewarded_on_loaded = (Module._ad_rewarded_on_loaded = function () {
    return (_ad_rewarded_on_loaded = Module._ad_rewarded_on_loaded =
      Module.asm.Yb).apply(null, arguments);
  }),
  _ad_rewarded_on_reward = (Module._ad_rewarded_on_reward = function () {
    return (_ad_rewarded_on_reward = Module._ad_rewarded_on_reward =
      Module.asm.Zb).apply(null, arguments);
  }),
  _ad_rewarded_on_showed = (Module._ad_rewarded_on_showed = function () {
    return (_ad_rewarded_on_showed = Module._ad_rewarded_on_showed =
      Module.asm._b).apply(null, arguments);
  }),
  _hint_file_exists = (Module._hint_file_exists = function () {
    return (_hint_file_exists = Module._hint_file_exists = Module.asm.$b).apply(
      null,
      arguments
    );
  }),
  _set_is_mobile = (Module._set_is_mobile = function () {
    return (_set_is_mobile = Module._set_is_mobile = Module.asm.ac).apply(
      null,
      arguments
    );
  }),
  _get_app_version = (Module._get_app_version = function () {
    return (_get_app_version = Module._get_app_version = Module.asm.bc).apply(
      null,
      arguments
    );
  }),
  _use_test_api_server = (Module._use_test_api_server = function () {
    return (_use_test_api_server = Module._use_test_api_server =
      Module.asm.cc).apply(null, arguments);
  }),
  _level_select_menu_start_level = (Module._level_select_menu_start_level =
    function () {
      return (_level_select_menu_start_level =
        Module._level_select_menu_start_level =
          Module.asm.dc).apply(null, arguments);
    }),
  _set_game_focus = (Module._set_game_focus = function () {
    return (_set_game_focus = Module._set_game_focus = Module.asm.ec).apply(
      null,
      arguments
    );
  }),
  _set_ad_freq = (Module._set_ad_freq = function () {
    return (_set_ad_freq = Module._set_ad_freq = Module.asm.fc).apply(
      null,
      arguments
    );
  }),
  _set_ad_duration_offline = (Module._set_ad_duration_offline = function () {
    return (_set_ad_duration_offline = Module._set_ad_duration_offline =
      Module.asm.gc).apply(null, arguments);
  }),
  _set_abtest_in_game_get = (Module._set_abtest_in_game_get = function () {
    return (_set_abtest_in_game_get = Module._set_abtest_in_game_get =
      Module.asm.hc).apply(null, arguments);
  }),
  _set_user_premium_ends = (Module._set_user_premium_ends = function () {
    return (_set_user_premium_ends = Module._set_user_premium_ends =
      Module.asm.ic).apply(null, arguments);
  }),
  _get_user_premium_ends = (Module._get_user_premium_ends = function () {
    return (_get_user_premium_ends = Module._get_user_premium_ends =
      Module.asm.jc).apply(null, arguments);
  }),
  _set_user_banned = (Module._set_user_banned = function () {
    return (_set_user_banned = Module._set_user_banned = Module.asm.kc).apply(
      null,
      arguments
    );
  }),
  _set_user_gems = (Module._set_user_gems = function () {
    return (_set_user_gems = Module._set_user_gems = Module.asm.lc).apply(
      null,
      arguments
    );
  }),
  _set_user_nick = (Module._set_user_nick = function () {
    return (_set_user_nick = Module._set_user_nick = Module.asm.mc).apply(
      null,
      arguments
    );
  }),
  _set_user_state = (Module._set_user_state = function () {
    return (_set_user_state = Module._set_user_state = Module.asm.nc).apply(
      null,
      arguments
    );
  }),
  _set_user_uid = (Module._set_user_uid = function () {
    return (_set_user_uid = Module._set_user_uid = Module.asm.oc).apply(
      null,
      arguments
    );
  }),
  _set_user_adfree_ends = (Module._set_user_adfree_ends = function () {
    return (_set_user_adfree_ends = Module._set_user_adfree_ends =
      Module.asm.pc).apply(null, arguments);
  }),
  _get_app_inited = (Module._get_app_inited = function () {
    return (_get_app_inited = Module._get_app_inited = Module.asm.qc).apply(
      null,
      arguments
    );
  }),
  _log_simple = (Module._log_simple = function () {
    return (_log_simple = Module._log_simple = Module.asm.rc).apply(
      null,
      arguments
    );
  }),
  _app_terminate_if_necessary = (Module._app_terminate_if_necessary =
    function () {
      return (_app_terminate_if_necessary = Module._app_terminate_if_necessary =
        Module.asm.sc).apply(null, arguments);
    }),
  _score_set_top_nicks_and_scores = (Module._score_set_top_nicks_and_scores =
    function () {
      return (_score_set_top_nicks_and_scores =
        Module._score_set_top_nicks_and_scores =
          Module.asm.tc).apply(null, arguments);
    }),
  _score_set_above_nicks_and_scores =
    (Module._score_set_above_nicks_and_scores = function () {
      return (_score_set_above_nicks_and_scores =
        Module._score_set_above_nicks_and_scores =
          Module.asm.uc).apply(null, arguments);
    }),
  _score_set_below_nicks_and_scores =
    (Module._score_set_below_nicks_and_scores = function () {
      return (_score_set_below_nicks_and_scores =
        Module._score_set_below_nicks_and_scores =
          Module.asm.vc).apply(null, arguments);
    }),
  _score_read_finished_em = (Module._score_read_finished_em = function () {
    return (_score_read_finished_em = Module._score_read_finished_em =
      Module.asm.wc).apply(null, arguments);
  }),
  _keydown_browser = (Module._keydown_browser = function () {
    return (_keydown_browser = Module._keydown_browser = Module.asm.xc).apply(
      null,
      arguments
    );
  }),
  _update_screen_size = (Module._update_screen_size = function () {
    return (_update_screen_size = Module._update_screen_size =
      Module.asm.yc).apply(null, arguments);
  }),
  _request_fullscreen = (Module._request_fullscreen = function () {
    return (_request_fullscreen = Module._request_fullscreen =
      Module.asm.zc).apply(null, arguments);
  }),
  _user_accepted_and_clicked = (Module._user_accepted_and_clicked =
    function () {
      return (_user_accepted_and_clicked = Module._user_accepted_and_clicked =
        Module.asm.Ac).apply(null, arguments);
    }),
  _pause_main_loop = (Module._pause_main_loop = function () {
    return (_pause_main_loop = Module._pause_main_loop = Module.asm.Bc).apply(
      null,
      arguments
    );
  }),
  _resume_main_loop = (Module._resume_main_loop = function () {
    return (_resume_main_loop = Module._resume_main_loop = Module.asm.Cc).apply(
      null,
      arguments
    );
  }),
  _main = (Module._main = function () {
    return (_main = Module._main = Module.asm.Dc).apply(null, arguments);
  }),
  _ntp_set_server_time = (Module._ntp_set_server_time = function () {
    return (_ntp_set_server_time = Module._ntp_set_server_time =
      Module.asm.Ec).apply(null, arguments);
  }),
  _moderation_publish_perform = (Module._moderation_publish_perform =
    function () {
      return (_moderation_publish_perform = Module._moderation_publish_perform =
        Module.asm.Fc).apply(null, arguments);
    }),
  _play_counter_falloff = (Module._play_counter_falloff = function () {
    return (_play_counter_falloff = Module._play_counter_falloff =
      Module.asm.Gc).apply(null, arguments);
  }),
  _news_create = (Module._news_create = function () {
    return (_news_create = Module._news_create = Module.asm.Hc).apply(
      null,
      arguments
    );
  }),
  _news_update_started = (Module._news_update_started = function () {
    return (_news_update_started = Module._news_update_started =
      Module.asm.Ic).apply(null, arguments);
  }),
  _news_update_finished = (Module._news_update_finished = function () {
    return (_news_update_finished = Module._news_update_finished =
      Module.asm.Jc).apply(null, arguments);
  }),
  ___errno_location = (Module.___errno_location = function () {
    return (___errno_location = Module.___errno_location = Module.asm.Kc).apply(
      null,
      arguments
    );
  }),
  stackSave = (Module.stackSave = function () {
    return (stackSave = Module.stackSave = Module.asm.Lc).apply(
      null,
      arguments
    );
  }),
  stackRestore = (Module.stackRestore = function () {
    return (stackRestore = Module.stackRestore = Module.asm.Mc).apply(
      null,
      arguments
    );
  }),
  stackAlloc = (Module.stackAlloc = function () {
    return (stackAlloc = Module.stackAlloc = Module.asm.Nc).apply(
      null,
      arguments
    );
  });
function ExitStatus(e) {
  (this.name = "ExitStatus"),
    (this.message = "Program terminated with exit(" + e + ")"),
    (this.status = e);
}
(Module.ccall = ccall),
  (Module.cwrap = cwrap),
  (Module.addRunDependency = addRunDependency),
  (Module.removeRunDependency = removeRunDependency),
  (Module.FS_createPath = FS.createPath),
  (Module.FS_createDataFile = FS.createDataFile),
  (Module.FS_createPreloadedFile = FS.createPreloadedFile),
  (Module.FS_createLazyFile = FS.createLazyFile),
  (Module.FS_createDevice = FS.createDevice),
  (Module.FS_unlink = FS.unlink);
var calledMain = !1;
function callMain(e) {
  var t = Module._main;
  (e = e || []).unshift(thisProgram);
  var n = e.length,
    r = stackAlloc(4 * (n + 1)),
    o = r >> 2;
  e.forEach((e) => {
    HEAP32[o++] = allocateUTF8OnStack(e);
  }),
    (HEAP32[o] = 0);
  try {
    var a = t(n, r);
    return exit(a, !0), a;
  } catch (e) {
    return handleException(e);
  } finally {
    calledMain = !0;
  }
}
function run(e) {
  function t() {
    calledRun ||
      ((calledRun = !0),
      (Module.calledRun = !0),
      ABORT ||
        (initRuntime(),
        preMain(),
        Module.onRuntimeInitialized && Module.onRuntimeInitialized(),
        shouldRunNow && callMain(e),
        postRun()));
  }
  (e = e || arguments_),
    0 < runDependencies ||
      (preRun(),
      0 < runDependencies ||
        (Module.setStatus
          ? (Module.setStatus("Running..."),
            setTimeout(function () {
              setTimeout(function () {
                Module.setStatus("");
              }, 1),
                t();
            }, 1))
          : t()));
}
function exit(e, t) {
  procExit((EXITSTATUS = e));
}
function procExit(e) {
  (EXITSTATUS = e),
    keepRuntimeAlive() || (Module.onExit && Module.onExit(e), (ABORT = !0)),
    quit_(e, new ExitStatus(e));
}
if (
  ((dependenciesFulfilled = function e() {
    calledRun || run(), calledRun || (dependenciesFulfilled = e);
  }),
  (Module.run = run),
  Module.preInit)
)
  for (
    "function" == typeof Module.preInit && (Module.preInit = [Module.preInit]);
    0 < Module.preInit.length;

  )
    Module.preInit.pop()();
var shouldRunNow = !0;
Module.noInitialRun && (shouldRunNow = !1), run();
