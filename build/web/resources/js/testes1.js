function refreshPremiumMessage() {
    var e = [];

    e[0] = {text: "Emitir boletos banc\xe1rios!", ga: "premium_message_boleto"},
    e[1] = {text: "Gerenciar mais contas banc\xe1rias!", ga: "premium_message_accounts"},
    e[2] = {text: "Anexar comprovantes!", ga: "premium_message_attachments"},
    e[3] = {text: "Receber alertas por SMS!", ga: "premium_message_sms"},
    e[4] = {text: "Ter suporte por telefone!", ga: "premium_message_phone_support"},
    e[5] = {text: "Dar acesso a outras pessoas!", ga: "premium_message_account_access"};

    var t = e[Math.floor(6 * Math.random())];

    pushPremiumMessageGa(t.ga),
    
    $("#premiumMessageChange").text(t.text),
    $("#premiumMessage").attr("data-push-analytics", t.ga),
    
    setInterval(function () {
        var t = e[Math.floor(6 * Math.random())];

        pushPremiumMessageGa(t.ga),
            $("#premiumMessageChange").text(t.text),
            $("#premiumMessage").attr("data-push-analytics", t.ga)},3e4);
    }

    function pushPremiumMessageGa(e) {
        $("#premiumMessage").unbind("click").click(function () {
            _gaq.push(["_trackEvent", "MensagemPremium", "Movimentacoes", e]);
        });
    }

    function printTransactions() {
        $("button#buttonPrintTransactions").click(function () {
            window.print();
        }), $("button#buttonPrintTransfers").click(function () {
            window.print();
        });
    }

    function hideSumPopup() {
        $("ul#tableSumAllItems").click(function () {
            $("ul#tableSumAllItems li.hidable").toggleClass("short"),
            $("li#hideButton i").toggleClass("icon-chevron-down icon-chevron-up");
        });
    }

    function hideRemoveButton() {
        var e = $zg.c;
        1 != e ? $("#quickBankSlipMenu").hide() : $("#quickBankSlipMenu").show(),
        checkPermissionTo(e, "delete", "btn-exclude");
    }

    function dragAndDropExpenseFile() {
        $("div#tableModalEditDetails").on("dragover", function (e) {
            $(this).css("background-color", "#FFD"),
            $("form#uploadFileForm a").html("<strong>Solte o arquivo aqui...</strong>"),
            e.preventDefault(),
            e.stopPropagation();
        }),
        
        $("div#tableModalEditDetails").on("dragenter", function (e) {
            e.preventDefault(),
            e.stopPropagation()
        }),
        
        $("div#tableModalEditDetails").on("drop", function (e) {
            $(this).css("background-color", "white"),
            
            e.preventDefault(), formData = new FormData;
            
            var t,
            
            a = e.originalEvent.dataTransfer.files,
            n = "";
            
            for (t = 0; t < a.length; t++)
                n += "" + a[t].name + " ";
            for (t = 0; t < a.length; t++)
                formData.append("doc", a[t]), confirmUploadFile(formData, n);
        });
    }

function confirmUploadFile(e, t) {
    var a = "<strong>Clique</strong> aqui ou <strong>arraste</strong> para c\xe1 os documentos que desejar vincular a esta movimenta\xe7\xe3o.</a>", n = getIdFromString($(trEdit).attr("id"));
    $("form#uploadFileForm a").html("Enviando o(s) arquivo(s): <strong>" + t + '</strong><i id="uploadFormLoading" class="fa fa-spin fa-spinner"></i>'), e.append("expense_id", n), $.ajax({url: "/manager/user_account_document/upload", type: "POST", data: e, processData: !1, contentType: !1, success: function (e) {
            e = $.parseJSON(e), "success" == e.status ? loadExpenseAttachments(n) : "buy_premium" == e.status ? $("#modalPacoteMulti").modal("show") : "error" == e.status && (alert(e.message), loadExpenseAttachments(n)), $(".attachmentProgress:first").remove(), $("#uploadFileForm").show(), $("#uploadFileFormBox").html(a)
        }})
}

function submitDocumentUploadForm() {
    $("#uploadFileFormBox").on("click", function (e) {
        $("#btnFileUpload").click(), e.preventDefault()
    }), $("#btnFileUpload").change(function () {
        "" != $(this).val() && ($("#uploadFileForm").submit(), getJsonFromFrame($("#btnFileUpload").val()))
    })
}

function getJsonFromFrame(e) {
    var t = "<strong>Clique</strong> aqui ou <strong>arraste</strong> para c\xe1 os documentos que desejar vincular a esta movimenta\xe7\xe3o.</a>";
    $("form#uploadFileForm a").html("Enviando o arquivo <strong>" + e.substring(e.lastIndexOf("\\") + 1) + '</strong><i id="uploadFormLoading" class="fa fa-spin fa-spinner"></i>');
    var a = window.setInterval(function () {
        if (null == jsonExpenseAttachment || void 0 == jsonExpenseAttachment)
            jsonExpenseAttachment = $.parseJSON($("iframe[name='iframeDocumentUpload']").contents().find("body").text());
        else {
            var e = getIdFromString($(trEdit).attr("id"));
            "success" == jsonExpenseAttachment.status ? (clearInterval(a), loadExpenseAttachments(e), removeExpenseAttachment(), jsonExpenseAttachment = null, $(".attachmentProgress:first").remove(), $("#btnFileUpload").val(""), clearAttachmentIframeContent()) : "buy_premium" == jsonExpenseAttachment.status ? ($("#modalPacoteMulti").modal("show"), clearInterval(a), $(".attachmentProgress:first").remove(), $("#uploadFileFormBox").html(t), clearAttachmentIframeContent()) : (clearInterval(a), alert(jsonExpenseAttachment.message), removeExpenseAttachment(), jsonExpenseAttachment = null, $("#btnFileUpload").val(""), $(".attachmentProgress:first").remove(), $("#uploadFileFormBox").html(t), clearAttachmentIframeContent())
        }
    }, 1e3)
}

function clearAttachmentIframeContent() {
    $("iframe[name='iframeDocumentUpload']").attr("src", "about:blank")
}

function setUploadDocumentField(e) {
    var t = $('<input type="hidden" id="doc_expense_id" name="expense_id" value="' + e + '">');
    $("#doc_expense_id").remove(), $("#uploadFileForm").append(t)
}

function loadExpenseAttachments(e) {
    ZP.ajaxCall("/manager/user_account_document/expense_attachments", {expense_id: e}, function (e) {
        $("#uploadFileExpenseImages").empty();
        for (var t in e)
            createAttachmentPreview(e[t]);
        removeExpenseAttachment(), viewAttachment(), 0 == $("#uploadFileExpenseImages").find(".attachmentDiv").length ? $("form#uploadFileForm a").addClass("thin") : $("form#uploadFileForm a").removeClass("thin")
    })
}

function viewAttachment() {
    $("a.attachmentLink").click(function () {
        var e = $(this).parent(".attachmentDiv").find(".attachmentFooter").find(".removeExpenseAttachment").attr("attachment-id"), t = "/manager/user_account_document/download_attachment/" + e;
        return $("#modalViewExpenseAttachment").find("#btnDownloadAttachment").attr("href", t), $("#modalViewExpenseAttachment").modal("show"), ZP.ajaxCall("/manager/user_account_document/view", {attachment_id: e}, function (e, t) {
            "success" == t && $("#modalViewExpenseAttachment").find(".modal-body").html(e)
        }), !1
    })
}

function createAttachmentPreview(e) {
    var t = $('<div class="attachmentDiv"><a class="attachmentLink" href="#"><img src="' + e.thumb_url + '" title="' + e.original_file_name + '"></a><div class="attachmentFooter"><a href="/manager/user_account_document/download_attachment/' + e.id + '" attachment-id="' + e.id + '" title="Download do Arquivo"><i class="icon-download-alt icon-white"></i></a><a href="#" class="removeExpenseAttachment" attachment-name="' + e.original_file_name + '" attachment-id="' + e.id + '" title="Excluir Arquivo"><i class="icon-trash icon-white"></i></a></div></div>');
    $("#uploadFileExpenseImages").append(t), $("form#uploadFileForm a").html("<strong>Clique</strong> aqui ou <strong>arraste</strong> para c\xe1 os documentos que desejar vincular a esta movimenta\xe7\xe3o."), removeExpenseAttachment()
}

function removeExpenseAttachment() {
    $(".removeExpenseAttachment").unbind("click").click(function () {
        var e = $(this), t = e.attr("attachment-id"), a = e.attr("attachment-name"), n = getIdFromString($(trEdit).attr("id"));
        return confirm("Deseja realmente excluir o arquivo: " + a + "?") && ZP.ajaxCall("/manager/user_account_document/remove_attachment", {attachment_id: t}, function (e, t) {
            "success" == t && 1 == e ? loadExpenseAttachments(n) : alert(e)
        }), !1
    })
}

function hideEditButton() {
}

function checkPermissionTo(e, t, a) {
    switch (e) {
        case"1":
            user_permissions["aba_recebimento_" + t] ? "" : hideButton(a);
            break;
        case"2":
            user_permissions["aba_despesa_fixa_" + t] ? "" : hideButton(a);
            break;
        case"3":
            user_permissions["aba_despesa_variavel_" + t] ? "" : hideButton(a);
            break;
        case"4":
            user_permissions["aba_pessoal_" + t] ? "" : hideButton(a);
            break;
        case"5":
            user_permissions["aba_imposto_" + t] ? "" : hideButton(a);
            break;
        case"6":
            user_permissions["aba_transferencia_" + t] ? "" : hideButton(a);
            break;
        case"7":
            user_permissions["aba_transferencia_" + t] ? "" : hideButton(a);
            break;
        case"t":
            user_permissions["aba_transferencia_" + t] ? "" : hideButton(a)
        }
}

function hideButton(e) {
    $(".column-button").find("." + e).hide()
}

function openTransactionLeadPrototype() {
    $("body").on("click", "a.opportunityButton", function () {
        opportunityPos = $(this).offset(), $("div#opportunityBox").css("top", opportunityPos.top - 35 + "px"), $("div#opportunityBox").slideToggle()
    }), $("div#opportunityBox button.close").click(function () {
        $("div#opportunityBox").fadeOut()
    }), $("div#opportunityBox a#opportunityTakeItBitch").click(function () {
        $("div#opportunityBox").fadeOut()
    })
}

function scrollMonths() {
    $("ul#monthScroll li.month").click(function () {
        $(this).hasClass("active-month") || ($(this).siblings("li.active-month").removeClass("active-month"), $(this).addClass("active-month"), goToMonth($(this).attr("month"), $(this).attr("year")))
    })
}

function expandTableArea() {
    $("button#resizeTable").click(function () {
        $(this).children("i").toggleClass("icon-resize-small icon-resize-full"), $("div#overviewContent").toggle(), $("div#tableContent").toggleClass("span9 span12"), $("table.table-excel").toggleClass("expanded"), $("button#tableRowEditDetails").toggleClass("expanded"), $("div#tableModalEditDetails").toggleClass("expanded"), getSumPosition()
    })
}

function setGeneralActions() {
    submitDocumentUploadForm(), dragAndDropExpenseFile(), checkBrowserType(), scrollMonths(), expandTableArea(), menuCliqueDireito(), setTableOrderActions(), setKeyBoardActions(), getMonthCollection(("01/" + $zg.m + "/" + $zg.y).split("/")), displayActualMonthName(), configScreen(), loadArrayParts(), loadArrayCats(), updateContent(), updateDateInitial(), $("#_ckSelectAll").click(selectAllLines), $("#_txtNewSuplier,#_txtNewValue,#_ddlNewSelect").keyup(saveOnEnter), $("#btnDeleteMultiple").click(keyDeleteExpenses), $("#btnUpdateMultiple").click(updateMultiples), $("button#tableRowEditDetails").click(editDetails), $("#btnCancelDetails").click(cancelDetails), $(".btnCreateBill").unbind("click").click(createBill), $("#btnManageBills").click(manageBills), $("#btnInvoice").click(createInvoice), $("#_ddlNewSelect,#_txtEditMultiCat").change(checkCategoryActions), $("#btnNewItem").click(addNewLine), $("#btnDeleteItem").click(deleteItem), $("#_ddlDetailsExpenseFrequency").change(changeDetailsFrequency), $("#_ckDetailsFrequencyTimeS,#_ckDetailsFrequencyTimeN").click(changeDetailsFrequencyFixed), $("#btnSaveDetails").click(function () {
        $("#btnSaveDetails").button("loading"), saveDetails(function () {
            $("#btnSaveDetails").button("reset")
        })
    }), $("#btnExcludeInstalments").click(destroyInstalment), $("#tableFooter").click(displayItems), $("#_btnSaveNewPartEdit").click(saveNewPartAll), $("#_txtNewPartEdit").keypress(saveNewPartAllOnEnter), $("#ddl_cost_centers").change(selectCostCenter).select2({width: "185px"}), $("#btn-save-new-transf").click(saveNewTransf), $("#btn-cancel-new-transf").click(clearNewTransfer), $("#_ddlItemDetailCostCenter").change(check_instalment_change_cost_center), $("input#_txt_details_duo_date").change(checkDueDate), $("select#_ddl_payment_type").change(selectPaymentType), $("#ddlFromTranf").select2({minimumResultsForSearch: 1 / 0}), $("#ddlToTranf").select2({minimumResultsForSearch: 1 / 0}), $(document).on("click", ".btn-update-item", checkSaveDetails), $(document).on("click", ".btn-update-item", displayItems), $(document).on("click", ".btn-update-item", focusItem), $(document).on("click", ".btn-update-item", showTrashButton), $(document).on("click", ".item", makeEdit), $(document).on("click", ".ckSelectItem", selectItem), $(document).on("click", ".ckSelectMultiCategory", verifyDeleteMultiCategory), $(document).on("keypress", ".iptPayDate", updateLinePayDate), $(document).on("change", ".iptPayDate", updateLinePayDate), $(document).on("change", ".iptSuplier", updateLineSuplier), $(document).on("keypress", ".iptSuplier", updateLineSuplier), $(document).on("change", ".ddlPart", updateLinePart), $(document).on("keypress", ".iptPrice", updateLinePrice), $(document).on("blur", ".iptPrice", updateLinePrice), $(document).on("focus", ".iptPrice", saveOldLinePrice), $(document).on("change", ".ddlCat", updateLineCategory), $(document).on("click", ".ckPayed", updateLinePayed), $(document).on("click", ".ck_paid_transfer", updateTranferPayed), $(document).on("click", ".trExpense", checkBankSlipsNumber)
}

function checkBankSlipsNumber() {
    hideEditButton(), hideRemoveButton();
    var e = getIdFromString($(this).attr("id"));
    $("button#tableRowEditDetails").one("click", function (t) {
        t.stopPropagation(), $.get("/manager/expense_slips/count_bank_slips/" + e, function (e) {
            var t = e.data.bankslips;
            0 == t ? ($("#btnManageBills").hide(), $("#btnManageBills").parents("ul").find('li[class="divider"]').hide()) : ($("#btnManageBills").show(), $("#btnManageBills").parents("ul").find('li[class="divider"]').show())
        })
    })
}

function selectPaymentType() {
    4 == $(this).val() ? ($("select#_ddl_payment_type_card_acquire").val("").show(), $("#s2id__ddl_payment_type_card_acquire").val("").show()) : ($("select#_ddl_payment_type_card_acquire").val("").hide(), $("#s2id__ddl_payment_type_card_acquire").val("").hide())
}

function checkDueDate() {
    "" != $(this).val() && 0 == checkDate($(this).val()) && (alert("A data informada \xe9 inv\xe1lida, por favor, informe uma data correta."), $(this).val($("input.iptPayDate").val()), $(this).focus())
}

function details_tags() {
    $("textarea#_txtTagsDescription").tag({source: function (e, t) {
            $.ajax({type: "post", url: "/manager/expense_tag/auto_complete", data: {name: e}, success: function (e) {
                    t(e)
                }})
        }}), $("div#dv_tags div.tags input").keyup(function () {
        $(this).css("width", 20 + 8 * $(this).val().length)
    })
}

function goToCostCenter(e, t) {
    var a = $("#spBalanceToday").attr("permission");
    $("#ddl_cost_centers").val(e).change(), $("#ddl_cost_centers").select2("val", e), $("#companyBalanceAccountName").html("false" == a ? t : "Saldo \u2014 " + t)
}

function updateTranferPayed() {
    var e = $(this).get(0).checked, t = $(this).parent().parent().attr("class"), a = getIdFromString(t);
    CallAjaxMethod({pa: e, id: a}, "/manager/expenses/set_transfer_paid", function (a) {
        "ok" == a ? (getBalance(), $("." + t).each(function () {
            $(this).find(".ck_paid_transfer").get(0).checked = e
        })) : showError(a)
    })
}

function check_instalment_change_cost_center() {
    "ok" == $(this).attr("instalment") && ($(this).attr("old_cc") != $(this).val() ? $("label#lbl_show_update_instalment_cost_center").show() : $("label#lbl_show_update_instalment_cost_center").hide())
}

function saveNewTransf() {
    var e = $("#txtDtTransf").val(), t = $("#txtDescTransf").val(), a = $("#ddlFromTranf").val(), n = $("#ddlToTranf").val(), i = $("#txtPriceTransf").val(), o = $("#ckPaidTranf").get(0).checked;
    if ("" == e)
        return showError("Por favor, informe uma data para a transfer\xeancia!"), $("#txtDtTransf").focus(), !1;
    if (a == n)
        return showError("A transfer\xeancia deve ser realizada entre contas diferentes."), $("#ddlFromTranf").focus(), !1;
    if ("" == i)
        return showError("A transfer\xeancia deve possuir um valor."), $("#txtPriceTransf").focus(), !1;
    var s = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
    CallAjaxMethod({dt: e, de: t, to: a, td: n, pr: i, pa: o, c: s}, "/manager/expenses/create_new_transfer", function (e) {
        "ok" == e ? (updateContent(), clearNewTransfer(), showAlert("Transferencia cadastrada com sucesso!")) : showError(e)
    })
}
function clearNewTransfer() {
    $("#tr_add_new_transfer").hide(), $("#txtDescTransf").val("Transfer\xeancia entre contas"), $("#txtPriceTransf").val(""), $("#ckPaidTranf").get(0).checked = !0
}
function selectCostCenter() {
    var e = $(this).val();
    "" != e ? (updateContent(), OLD_VAL_COST_CENTER = $("#ddl_cost_centers").val()) : openCostCenterManager()
}
function saveOldLinePrice() {
    saveOldLinePrice = $(this).val()
}
function checkSaveDetails() {
    "block" == $("div#tableModalEditDetails").css("display") && $("#btnSaveDetails").click()
}
function focusItem() {
    $(this).parent().find(".btn-exclude").first().focus()
}
function isInstalmentUpdate(e, t, a, n) {
    "" != $(a).attr("ins") && createPopoverInstalmentEditQuestion(e, n, t)
}
function updateLinePayDate(e) {
    if (8 == e.keyCode)
        return!1;
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var t = $(this).parent().parent(), a = getIdFromString(t.attr("id")), n = $(this).val(), i = $(this).parent().find("span"), o = $(this).parent();
        if (1 != checkDate(n))
            return alert("A Data informada n\xe3o parece ser uma data v\xe1lida, por favor, verifique e tente novamente!"), $(this).focus(), $(this).val($zg.dtS), !1;
        if (testDate = !0, msg = checkDateServer(n), "" != msg && (testDate = confirm(msg + "\n\n\nEste item ser\xe1 cadastrado nesta data, para acess\xe1-lo voc\xea dever\xe1 navegar at\xe9 o m\xeas referente.\n\n\nDeseja continuar assim mesmo ?")), 1 == testDate) {
            var s = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
            CallAjaxMethod({i: a, v: $(this).val(), c: s}, "/manager/expenses/update_paid_date_ajax", function (s) {
                if ("ok" == s)
                    $(i).text(dateFormat(n)), $(t).attr("iptPayDate", n), 13 == e.keyCode && displayItems(), checkOverdue(a, t, $(t).find(".ckPayed").first().get(0).checked), $(".ui-datepicker").hide(), "" != $(t).attr("itype") && "null" != $(t).attr("itype") && isInstalmentUpdate("dt", n, t, o);
                else {
                    if ("lockedCC" == s)
                        return $("#btnEditCostCenter").triggerHandler("click"), !1;
                    showError(s)
                }
            })
        } else
            $(this).val($zg.dtS), $(this).focus()
    }
}
function updateLineSuplier(e) {
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var t = $(this).parent().parent(), a = getIdFromString(t.attr("id")), n = $(this).val(), i = $(this).parent().find("span"), o = $(this).parent();
        13 == e.keyCode && displayItems();
        var s = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
        CallAjaxMethod({i: a, v: $(this).val(), c: s}, "/manager/expenses/update_suplier_ajax", function (e) {
            if ("ok" == e) {
                var a = $(i).find(".instalment").text(), s = $(i).find(".sp-cost-center").text();
                $(i).find(".suplier").text(n), $(i).find(".instalment").text(a), "" != s && $(i).find(".sp-cost-center").html("<br>" + s), $(t).attr("iptSuplier", n), isInstalmentUpdate("su", n, t, o)
            } else {
                if ("lockedCC" == e)
                    return $("#btnEditCostCenter").triggerHandler("click"), !1;
                showError(e)
            }
        })
    }
}
function updateLinePart(e) {
    var t = $(this).attr("id");
    if ("_ddlDetailsParts" == t)
        return!1;
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var a = $(this).val();
        if (!isNaN(a) || "" == a.trim()) {
            var n = $(this).parent().parent(), i = $(this).parent(), o = getIdFromString(n.attr("id")), s = $(this).parent().find("span"), r = $(this).find("option[value='" + a + "']").text();
            ("" == r || "" == a.trim()) && (r = "--");
            var l = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
            ZP.ajaxCall("/manager/expenses/update_part_id_ajax", {i: o, v: $(this).val(), c: l}, function (t, o) {
                if ("ok" == t)
                    "success" == o && ($(s).text(r), $(n).attr("ddlPart", a), 13 == e.keyCode && displayItems(), 0 == LOCK_MODAL_PART && isInstalmentUpdate("pa", a, n, i));
                else if ("lockedCC" == t)
                    return $("#btnEditCostCenter").triggerHandler("click"), !1
            })
        }
    }
}
function updateLinePrice(e) {
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var t = $(this).parent().parent().parent(), a = $(this).parent().parent(), n = getIdFromString(t.attr("id")), i = $(this).val(), o = $(this).parent().find("span"), s = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
        CallAjaxMethod({i: n, v: $(this).val(), c: s}, "/manager/expenses/update_price_ajax", function (n) {
            if ("ok" == n)
                $(o).text("R$ " + i), $(t).attr("iptPrice", i), 13 == e.keyCode && displayItems(), saveOldLinePrice != i && isInstalmentUpdate("pr", i, t, a), getBalance();
            else {
                if ("lockedCC" == n)
                    return $("#btnEditCostCenter").triggerHandler("click"), !1;
                showError(n)
            }
        })
    }
}
function updateLineCategory(e) {
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var t = $(this).val();
        if (!isNaN(t) || "" == t.trim()) {
            var a = $(this).parent().parent(), n = getIdFromString(a.attr("id")), i = $(this).parent().find("span"), o = $(this).parent(), s = $(this).find("option[value='" + t + "']").text();
            "" == s && (s = "--");
            var r = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
            CallAjaxMethod({i: n, v: $(this).val(), c: r}, "/manager/expenses/update_cat_id_ajax", function (n) {
                if ("ok" == n)
                    $(i).text(s), $(a).attr("ddlCat", t), 13 == e.keyCode && displayItems(), 0 == LOCK_MODAL_CAT && isInstalmentUpdate("ca", t, a, o);
                else {
                    if ("lockedCC" == n)
                        return $("#btnEditCostCenter").triggerHandler("click"), !1;
                    showError(n)
                }
            })
        }
    }
}
function updateLinePayed(e) {
    if (void 0 == e.keyCode || 13 == e.keyCode) {
        var t = $(this).parent().parent(), a = getIdFromString(t.attr("id")), n = $(this).get(0).checked, i = $(this).find("option[value='" + n + "']").text(), o = $(t).attr("iptpaydate"), s = ($("#column-day div").text(), !1), r = t.attr("is_new");
        "" == i && (i = "--"), o != $zg.dtS && n && void 0 == r && "true" == $zg.show_update_date_question && ($("#md_question_update_item_paydate").modal("show"), $("#sp_text_modal_question_date,#sp_title_modal_question_date").text("Pagamento"), update_date_t = t, update_date_i = a, update_date_v = n);
        var l = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
        CallAjaxMethod({i: a, v: n, u: s, d: $zg.dtS, c: l}, "/manager/expenses/update_paid_ajax", function (i) {
            if ("ok" == i)
                13 == e.keyCode && displayItems(), getBalance(), getPartialSum(), checkOverdue(a, t, n), updateDisplayDate(s, $zg.dtS, t);
            else {
                if ("lockedCC" == i)
                    return $("#btnEditCostCenter").triggerHandler("click"), !1;
                showError(i)
            }
        })
    }
}
function updatedateLinePayedQuestinoYes() {
    var e = $("#tabCategory").find(".active").attr("id").replace("ic_", "");
    CallAjaxMethod({i: update_date_i, v: update_date_v, u: !0, d: $zg.dtS, c: e}, "/manager/expenses/update_paid_ajax", function (e) {
        "ok" == e ? (13 == event.keyCode && displayItems(), getBalance(), getPartialSum(), checkOverdue(update_date_i, update_date_t, update_date_v), updateDisplayDate(!0, $zg.dtS, update_date_t), setTimeout(function () {
            $(update_date_t).find(".cl-date").find(".dp-date").animate({"margin-top": "-5px"}, "fast").animate({"margin-top": "0px"}, "fast").animate({"margin-top": "-5px"}, "fast").animate({"margin-top": "0px"}, "fast")
        }, 800)) : showError(e)
    })
}
function updateDisplayDate(e, t, a) {
    if (e) {
        var n = t.split("/"), i = n[0] + "/" + n[1];
        $(a).attr("iptpaydate", t), $(a).find(".cl-date").find(".dp-date").text(i), $("input.iptPayDate").val(t)
    }
}
function checkBrowserType() {
    $.browser.msie && parseInt($.browser.version, 10) < 9 ? console.log("IEncompat\xedvel") : (scrollCaixaSoma(), scrollCaixaSaldo())
}
function configScreen() {
    $("#mnMovimentacoes a").addClass("activeMenu"), configTabs()
}
function configTabs() {
    $("ul#tabCategory #c" + $zg.c).tab("show"), "" != $zg.c && ($zg.c > 1 ? ($("ul#tabCategory #ic" + $zg.c).addClass("activeRed"), $("#tabCategory").css("border-bottom-color", "#E33D43"), $("ul#monthScroll").addClass("monthRed")) : "t" == $zg.c ? ($("ul#tabCategory #ic" + $zg.c).addClass("activeBlue"), $("#tabCategory").css("border-bottom-color", "#365EBF"), $("ul#monthScroll").addClass("monthBlue")) : ($("#tabCategory").css("border-bottom-color", "#56B349"), $("ul#monthScroll").addClass("monthGreen"))), checkTypeEntrance($zg.c), $("ul#tabCategory a").click(function () {
        return $("ul#tabCategory li").removeClass("active"), $("ul#monthScroll").removeClass("monthRed monthBlue monthGreen"), $zg.c = $(this).attr("id").replace("c", ""), $zg.c > 1 ? ($(this).parent().addClass("active"), $("ul#tabCategory").css("border-bottom-color", "#E33D43"), $("ul#monthScroll").addClass("monthRed")) : "t" == $zg.c ? ($(this).parent().addClass("active"), $("ul#tabCategory").css("border-bottom-color", "#365EBF"), $("ul#monthScroll").addClass("monthBlue")) : ($(this).parent().addClass("active"), $("ul#tabCategory").css("border-bottom-color", "#56B349"), $("ul#monthScroll").addClass("monthGreen")), checkTypeEntrance($zg.c), $("#companySelectTitle").html($(this).text()), getButtonAddName($zg.c), showBankSlipButton($zg.c), updateContentTab(), unCheckAllItems(), !1
    })
}
function getButtonAddName(e) {
    var t = "";
    switch (e.toString()) {
        case"1":
            t = "Adicionar novo <strong>recebimento</strong>";
            break;
        case"2":
            t = "Adicionar nova <strong>despesa fixa</strong>";
            break;
        case"3":
            t = "Adicionar nova <strong>despesa vari\xe1vel</strong>";
            break;
        case"4":
            t = "Adicionar nova <strong>despesa a pessoas</strong>";
            break;
        case"5":
            t = "Adicionar novo <strong>imposto</strong>";
            break;
        default:
            t = "Adicionar nova <strong>transfer\xeancia</strong>"
    }
    $("#btnNewItem").html('<i class="icon-plus"></i> ' + t)
}
function showBankSlipButton(e) {
    1 != e ? $(".btnBankSlip").hide() : $(".btnBankSlip").show()
}
function checkTypeEntrance(e) {
    $("#btnNewItem").removeClass("btn-success").removeClass("btn-danger").removeClass("btn-primary"), $("#tableSumLabel").removeClass("label-success").removeClass("label-danger").removeClass("label-primary"), $("#tableTransactions,#tableTransfers").hide(), 1 == e ? ($("#btnNewItem").addClass("btn-success"), $("#tableSumLabel").addClass("label-success"), $("#column-title-part,#lbl_part_name_details").text("Recebido de:"), $("#tableTransactions").show()) : "t" == e ? ($("#btnNewItem").addClass("btn-primary"), $("#tableSumLabel").addClass("label-primary"), $("#tableTransfers").show()) : ($("#btnNewItem").addClass("btn-danger"), $("#tableSumLabel").addClass("label-danger"), $("#column-title-part,#lbl_part_name_details").text("Pago a:"), $("#tableTransactions").show())
}
function displayProgressTableExpense() {
    hideDetails(), $("#transactionTableContent,#transferTableContent").html("<tr><td colspan='8'><p style=text-align:center;padding:10px;color:#444;font-size:1.2em;font-weight:bold;'><i class='fa fa-spinner fa-spin'></i> Por favor, aguarde! Carregando movimenta\xe7\xf5es...</p></td></tr>")
}
function updateContentTab() {
    var e = $("#ddl_cost_centers").val();
    displayProgressTableExpense(), "t" != $zg.c ? CallAjaxMethodGET(null, "/manager/user_account/expenses_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&c=" + $zg.c + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransactionTable(e), getBalanceCategory(), hideRemoveButton()
    }) : CallAjaxMethodGET(null, "/manager/user_account/transfer_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransferTable(e)
    })
}
function updateContentTableExpenses() {
    var e = $("#ddl_cost_centers").val();
    displayProgressTableExpense(), "t" != $zg.c ? CallAjaxMethodGET(null, "/manager/user_account/expenses_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&c=" + $zg.c + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransactionTable(e)
    }) : CallAjaxMethodGET(null, "/manager/user_account/transfer_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransferTable(e)
    })
}
function updateContent() {
    var e = $("#ddl_cost_centers").val(), t = getCostCenterNameGeneral(e), a = $("#spBalanceToday").attr("permission");
    $("#companyBalanceAccountName").html("false" == a ? t : "Saldo \u2014 " + t), displayProgressTableExpense(), "t" != $zg.c ? CallAjaxMethodGET(null, "/manager/user_account/expenses_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&c=" + $zg.c + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransactionTable(e), getBalance(), getPartialSum()
    }) : CallAjaxMethodGET(null, "/manager/user_account/transfer_table?a=" + $("#_cdC").val() + "&m=" + $zg.m + "&y=" + $zg.y + "&co=" + columnOrder + "&ct=" + columnOrderType + "&cc=" + e, function (e) {
        bindTransferTable(e), getBalance()
    })
}
function bindTransactionTable(e) {
    if (transactionsArr = e, 0 != transactionsArr[0].id) {
        var t = doT.template(document.getElementById("transactionTableTemp").text, void 0, void 0);
        $("#transactionTableContent").html(t(transactionsArr)), $("div.top-sum-dock").show()
    } else {
        var a = doT.template(document.getElementById("transactionEmptyTableTemp").text, void 0, void 0);
        $("#transactionTableContent").html(a(transactionsArr)), $("div.top-sum-dock").hide()
    }
    return cursor = -1, hideDetails(), "" != selectedItem && setItemPosition(), $.browser.msie && parseInt($.browser.version, 10) < 9 ? !1 : void getSumPosition()
}
function bindTransferTable(e) {
    if (transactionsArr = e, 0 != transactionsArr[0].id) {
        var t = doT.template(document.getElementById("transferTableTemp").text, void 0, void 0);
        $("#transferTableContent").html(t(transactionsArr)), $("div.top-sum-dock").show()
    } else {
        var a = doT.template(document.getElementById("transferEmptyTableTemp").text, void 0, void 0);
        $("#transferTableContent").html(a(transactionsArr)), $("div.top-sum-dock").hide()
    }
}
function getColSplit(e) {
    return 1 == e.item_split ? "<td class='item' colspan='2'>{{=item.item_price}}<span class='label-splited-item'>+ detalhado</span><span class='label-splited-item-payed'> ( pago " + e.item_split_payed + " )</span><input type='text' class='iptPrice' tipo='moeda' value='" + e.item_clear_price + "' style='display:none;'/></td><td class='item'><span class='icon icon-list btn-open-modal-splited-item-icon' rel='tooltip' title='Este valor foi detalhado em mais itens'></span></td>" : "<td class='column-price item' title='{{=item.item_title}}'><span class='display-item dp-price'>" + e.item_price + "</span><input type='text' class='edit-item iptPrice' tipo='moeda' value='" + e.item_clear_price + "' placeholder='Aqui o valor...'/><div class='edit-item icon-calc'></div></td>"
}
function setItemPosition() {
    "t" != $zg.c && ($("#tr_" + selectedItem).find(".dp-suplier").click(), selectedItem = "")
}
function hideDetails() {
    $("button#tableRowEditDetails").hide(), $("div#tableModalEditDetails").fadeOut(250, function () {
        $(this).hide()
    })
}
function checkCursor() {
    var e = !1;
    $(".ckSelectItem").each(function () {
        $(this).get(0).checked && (cursor = $(this).parent().parent().parent().index(), e = !0)
    }), e || (cursor = -1)
}
function setKeyBoardActions() {
    $("body").unbind("keyup").keyup(function (e) {
        (e.shiftKey && 40 == e.keyCode || e.shiftKey && 38 == e.keyCode) && (displayItems(), 40 == e.keyCode ? selectDown() : 38 == e.keyCode && selectUp()), 27 == e.keyCode && (displayItems(), unCheckAllItems(), clearNewTransfer(), destroySelectPopovers()), 46 == e.keyCode && keyDeleteExpenses(), e.shiftKey && 78 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && addNewLine(), e.shiftKey && 49 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#c1").click(), e.shiftKey && 50 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#c2").click(), e.shiftKey && 51 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#c3").click(), e.shiftKey && 52 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#c4").click(), e.shiftKey && 53 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#c5").click(), e.shiftKey && 54 == e.keyCode && 0 == $("input:focus").length && 0 == $("textarea:focus").length && $("a#ct").click()
    })
}
function unCheckAllItems() {
    $("#_ckSelectAll").get(0).checked = !1, $(".ckSelectItem").each(function () {
        if ($(this).get(0).checked) {
            var e = $(this).parent().parent().parent().parent();
            $(e).find(".item,.item-payed").removeClass("selected_item"), $(this).get(0).checked = !1
        }
    }), getPartialSum()
}
function selectDown() {
    cursor < $(".ckSelectItem").length && (cursor += 1, $(".ckSelectItem")[cursor].click())
}
function selectUp() {
    cursor > -1 && ($(".ckSelectItem")[cursor].click(), cursor -= 1)
}
function goUp() {
    displayItems();
    $("#tableTransactions").get(0).rows.length;
    if (cursor > 0) {
        cursor -= 1;
        var e = $("#tableTransactions").find("tr")[cursor], t = $(e).find("td")[1];
        return editLine(t), !1
    }
}
function goDown() {
    displayItems();
    var e = $("#tableTransactions").get(0).rows.length;
    if (e > cursor) {
        cursor += 1;
        var t = $("#tableTransactions").find("tr")[cursor], a = $(t).find("td")[1];
        return editLine(a), !1
    }
    return!1
}
function setTableOrderActions() {
    $(".btn-column-order").click(function () {
        $("th.column-selected").removeClass("column-selected"), $(".column-order").removeClass("column-order-asc").removeClass("column-order-desc");
        var e = $(this).attr("data-order");
        columnOrder = e, columnOrderType = "" == columnOrderType ? "asc" : "asc" == columnOrderType ? "desc" : "asc", $(this).toggleClass("column-selected"), $(this).find(".column-order").addClass("column-order-" + columnOrderType), orderExpenseTable(e, columnOrderType)
    })
}
function orderExpenseTable(e, t) {
    var a;
    switch (e) {
        case"payto":
            a = ".dp-person";
            break;
        case"cat":
            a = ".dp-category";
            break;
        case"desc":
            a = ".dp-suplier";
            break;
        case"price":
            a = ".dp-price";
            break;
        case"day":
            a = ".dp-date";
            break;
        case"pay":
            a = ".ckPayed"
    }
    var n, i = "asc" == t;
    switch (a) {
        case".dp-price":
            n = $(".trExpense").sort(function (e, t) {
                var n = currencyToNumber($(e).find(a).text()), o = currencyToNumber($(t).find(a).text()), s = n > o == i ? 1 : -1;
                return s
            });
            break;
        case".dp-date":
            n = $(".trExpense").sort(function (e, t) {
                return parseInt($(e).find(a).text().split("/")[0]) > parseInt($(t).find(a).text().split("/")[0]) == i ? 1 : -1
            });
            break;
        case".ckPayed":
            n = $(".trExpense").sort(function (e, t) {
                return $(e).find(a).is(":checked") > $(t).find(a).is(":checked") == i ? 1 : -1
            });
            break;
        default:
            n = $(".trExpense").sort(function (e, t) {
                var n = $(e).find(a).text().replace(/^\([\w\d/]+\) /i, ""), o = $(t).find(a).text().replace(/^\([\w\d/]+\) /i, ""), s = n.localeCompare(o, void 0, {sensitivity: "case"});
                return s * (i ? 1 : -1)
            })
    }
    $("#transactionTableContent").empty(), n.each(function (e, t) {
        $("#transactionTableContent").append(t)
    })
}
function changeExpenseCategory(e, t, a) {
    return t == $zg.c ? !1 : void CallAjaxMethod({e: e, c: t, o: $zg.c}, "/manager/expenses/change_category_ajax", function (n) {
        "ok" == n ? (showAlert("Item trocado de \xe1rea!"), a ? $("#c" + t).click() : t != $zg.c && $("#tr_" + e).remove(), $(".dropplableArea").animate({"margin-top": "0px"}, "fast"), getBalance()) : showError(n)
    })
}
function saveDetailClickInLine() {
    trEdit = $(this).parent().parent(), saveDetails()
}
function showTrashButton() {
    var e = $(this).parent().parent().find(".btn-exclude").attr("disabled", "disabled");
    setTimeout(function () {
        $(e).parent().parent().find(".btn-exclude").removeAttr("disabled")
    }, 5e3)
}
function deleteItem() {
    var e = $(".onEdit").first().parent(), t = getIdFromString($(e).attr("id"));
    $("#tr_" + t).find(".btn-exclude").click()
}
function changeDetailsFrequencyFixed() {
    $("#_ckDetailsFrequencyTimeS").get(0).checked ? ($("#_lblDetailsFrequencyTimes").show(), $("#_txtDetailsFrequencyTimes").focus()) : ($("#_lblDetailsFrequencyTimes").hide(), $("#_txtDetailsFrequencyTimes").val(""))
}
function changeDetailsFrequency() {
    "" != $(this).val() ? ($("#_lblDetailsCheckBoxFrequencyTime").show(), $($("#_ckDetailsFrequencyTimeS").focus().get(0)).click(), $("#_lblDetailsFrequencyTimes").show()) : ($("#_lblDetailsCheckBoxFrequencyTime").hide(), $("#_lblDetailsFrequencyTimes").hide())
}
function addNewLine() {
    return"t" == $zg.c ? ($("input#txtDtTransf").val(newDate), $("#tr_add_new_transfer").show(), bindDropBox("#ddlToTranf"), bindDropBox("#ddlFromTranf")) : saveNewLine(), !1
}
function showAlertSaveItem() {
    "" != $(this).val() ? $("#_lnkNewLine").popover({title: "Clique aqui para inserir este novo registro ou pressione ENTER.", content: "N\xe3o se esque\xe7a de salvar este registro."}).popover("show") : $("#_lnkNewLine").popover("hide")
}
function cancelDetails() {
    $("div#tableModalEditDetails").fadeOut(250, function () {
        $(this).hide()
    })
}
function createBill() {
    var e = getIdFromString($(trEdit).attr("id"));
    return createBillFromQuickMenu(e)
}
function createBillFromQuickMenu(e) {
    return bank_slip_wizard_finished ? ZP.ajaxCall("/manager/expense_slips/new/" + e, {}, function (e) {
        var t = $("#mdCreateBankSlip");
        t.find(".templates").html(e), expenseSlipsDispatcher.dispatch("inicial"), t.modal("show")
    }, "get") : openBankSlipsManager(), !1
}
function manageBills() {
    var e = getIdFromString($(trEdit).attr("id"));
    return $.get("/manager/expense_slips/manage_expense_slips/" + e, function (e) {
        var t = $("#mdManageBankSlip"), a = $("#manage-slips-content");
        a.html(e), modalExpenseSlipsCallback.call(a), t.modal("show")
    }), !1
}
function checkCategoryTypeDetails() {
    2 == $zg.c && ($("#_ddlDetailsExpenseFrequency").val("M"), $("#_ckDetailsFrequencyTimeN").get(0).checked = !0, $("#_lblDetailsCheckBoxFrequencyTime").show(), $("#_lblDetailsFrequencyTimes").hide())
}
function editDetails() {
    "1" != $zg.c ? $("#btnBankSlip").hide() : $("#btnBankSlip").show();
    var e = $(".onEdit").first().parent().offset();
    e.top - $(window).scrollTop() > $(window).height() - 420 && $(window).scrollTop(e.top - $(window).height() + 420);
    var t = $(".onEdit").first().parent();
    trEdit = t;
    var a = getIdFromString($(t).attr("id"));
    return $(".txt-expense,.txt-incoming").hide(), setUploadDocumentField(a), loadExpenseAttachments(a), clearDetails(), checkCategoryTypeDetails(), checkItemSplited(), checkPayedToColumn(), bindDropBox("#_ddlItemDetailCostCenter"), $("#lbl_show_update_instalment_cost_center").hide(), CallAjaxMethod({id: a}, "/manager/expenses/get_expense_by_id_ajax", function (e) {
        $("div#tableModalEditDetails").fadeIn(250);
        $(".active").attr("id").replace("ic_", "");
        for (tags = "", a = 0; a < e.tags.length; a++)
            tags += a == e.tags.length - 1 ? e.tags[a].name : e.tags[a].name + ", ";
        var t = $("label#tags_sugestion_list");
        for (a = 0; a < e.tags_sugestions.length; a++)
            tag = e.tags_sugestions[a].name, t.append("<a title='Clique para adicionar a lista' href='javascript:set_tag(\"" + tag + "\");'>" + tag + "</a> | ");
        if ($("#_txtTagsDescription").val(tags), details_tags(), 1 == $zg.c ? ($(".txt-expense").hide(), $(".txt-incoming").show(), 0 == $("#_ddl_payment_type option[value=4]").length && $("#_ddl_payment_type").append('<option value="4">Cart\xe3o de cr\xe9dito</option>')) : ($(".txt-expense").show(), $(".txt-incoming").hide(), $("#_ddl_payment_type option[value=4]").remove()), $("#_txtDetailsDescription").val(toHTML(e.comment)), $("#_ddlItemDetailCostCenter").val(e.cost_center), $("#_ddlItemDetailCostCenter").attr("old_cc", e.cost_center), $("input#_txt_details_duo_date").val(e.due_date), $("select#_ddl_payment_type").val(e.payment_type), $("select#_ddl_payment_type_card_acquire").val(e.payment_acquire), $("input#_txtDetailsDocumentNumber").val(e.document_number), 4 == e.payment_type && ($("select#_ddl_payment_type_card_acquire").show(), $("#s2id__ddl_payment_type_card_acquire").show()), null != e.instalment_id ? $("#_ddlItemDetailCostCenter").attr("instalment", "ok") : $("#_ddlItemDetailCostCenter").attr("instalment", ""), "block" == $("#dv-details-payedto").css("display")) {
            var n = getHtmlComboParts(e.part_id);
            $("#part_name_details").html(""), $("#part_name_details").append(n), $("#part_name_details").find("select").removeClass("edit-item").addClass("input-block-level"), $("#part_name_details").find("select").attr("id", "_ddlDetailsParts"), $("#part_name_details").find("select").select2({allowClear: !0, placeholder: "Pessoa/Empresa", width: "100%", formatNoMatches: function (e) {
                    return $(".select2-input").unbind("keyup").keyup(function (t) {
                        13 == t.keyCode && createNewPartDropDow(e)
                    }), "<i>Cadastrar nova:</i><br/><a href='javascript:createNewPartDropDow(\"" + e + "\");void(0);'><strong>" + e + "</strong></a>"
                }})
        }
        null != e.instalment_type && "" == e.instalment_type && ($("#_ddlDetailsExpenseFrequency").val(e.instalment_type), $("#_ddlDetailsExpenseFrequency").change()), null != e.instalment_id && ($("#_lblDetailsCheckBoxFrequencyTime").hide(), $("#_lblExpenseRecurly").hide(), $("#_lblAlertInstalment").show(), $("#_ddlDetailsExpenseFrequency").val(""), $("#_ckDetailsFrequencyTimeN").get(0).checked = !0, $("#_spInstalmentDetailsTypeNumber,#_spInstalmentDetailsTypeNoNumber,#_lblInstalmentDetails").hide(), null != e.instalment_type && ("" != e.instalment_type ? ($("#_lblInstalmentDetails").show(), $("#_lblInstalmentDetailsType").html(getInstalmentType(e.instalment_type)), 0 == e.instalment_total ? $("#_spInstalmentDetailsTypeNoNumber").show() : ($("#_spInstalmentDetailsTypeNumber").show(), $("#_spInstalmentDetailsTypeNumberCurrent").html(e.instalment_number), $("#_spInstalmentDetailsTypeNumberTotal").html(e.instalment_total))) : ($("#_ddlDetailsExpenseFrequency").val(e.instalment_type), $("#_lblInstalmentDetailsType").html(getInstalmentType("M"))))), null != e.part_id && $("#_ddlDetailsParts").val(e.part_id), $("#_ddl_payment_type_card_acquire, #_ddlDetailsExpenseFrequency, #_ddl_payment_type").select2({minimumResultsForSearch: 1 / 0}), 4 == e.payment_type && $("#s2id__ddl_payment_type_card_acquire").show(), $("select#_ddlItemDetailCostCenter").select2({minimumResultsForSearch: 2})
    }), !1
}
function toHTML(e) {
    return e = e.replace(/&amp;/g, "&"), e = e.replace(/&gt;/g, ">"), e = e.replace(/&lt;/g, "<"), e = e.replace(/&quot;/g, '"'), e = e.replace(/&#x27;/g, "'")
}
function getInstalmentType(e) {
    switch (e) {
        case"M":
            return"Mensalmente";
        case"S":
            return"Semanalmente";
        case"A":
            return"Anualmente";
        case"Q":
            return"Quinzenalmente";
        case"B":
            return"Bimestralmente";
        case"T":
            return"Trimestralmente";
        case"E":
            return"Semestralmente"
        }
}
function checkPayedToColumn() {
    var e = $(".column-paidto").first().css("display");
    "none" == e ? ($("#dv-details-payedto").show(), $("#dv-details-account").removeClass("span12").addClass("span6")) : ($("#dv-details-payedto").hide(), $("#dv-details-account").removeClass("span6").addClass("span12"))
}
function saveDetails(e) {
    var t = $("#_txtDetailsDescription"), a = $("#_ddlDetailsExpenseFrequency"), n = $("#_ckDetailsFrequencyTimeS").get(0).checked ? "s" : "n", i = $("#_txtDetailsFrequencyTimes"), o = $("#_ddlDetailsParts"), s = $("textarea#_txtTagsDescription").val(), r = $("input#ipt_update_instalment_cost_center").get(0).checked, l = $("input#_txt_details_duo_date").val(), c = $("select#_ddl_payment_type").val(), d = $("select#_ddl_payment_type_card_acquire").val(), u = $("input#_txtDetailsDocumentNumber").val(), m = $("input[name=ckRepeatDetailsForInstalments]").is(":checked");
    o = "none" == $("#dv-details-payedto").css("display") ? null : o.val();
    var p = $("#_ddlItemDetailCostCenter").val();
    if ("" != a.val()) {
        if ("" == n)
            return alert("Por favor, informe se este item tem prazo certo para acabar ou n\xe3o!"), e && e(), !1;
        if ("s" == n && "" == i.val())
            return alert("Por favor, informe a quantidade de parcelas."), i.focus(), e && e(), !1
    }
    var h = getIdFromString($(trEdit).attr("id"));
    CallAjaxMethod({i: h, c: $zg.c, od: l, cm: t.val(), pe: a.val(), "in": n, qin: i.val(), par: o, cc: p, tg: s, insup: r, ptype: c, pacquire: d, dnumber: u, rdfi: m}, "/manager/expenses/update_details_ajax", function (t) {
        if (e && e(), "ok" == t)
            clearDetails(), hideDetails(), displayItems();
        else if ("ok-c" == t)
            updateContent();
        else if ("ok-c-cc" == t)
            "t" != $("#ddl_cost_centers").val() && ($("#s2id_ddl_cost_centers").popover({placement: "left", content: "Voc\xea alterou a conta desta movimenta\xe7\xe3o. Para visualiza-la, selecione a conta de destino.", title: "<strong>Conta de destino alterada</strong>", html: !0, trigger: "manual"}).popover("show"), setTimeout(destroySelectPopovers, 1e4)), updateContent();
        else {
            if ("lockedCC" == t)
                return $("#btnEditCostCenter").triggerHandler("click"), !1;
            showError(t)
        }
    })
}
function clearDetails() {
    $("#_txtDetailsDescription").val(""), $("#_ddlDetailsExpenseFrequency").val("n"), $("#_lblDetailsCheckBoxFrequencyTime").hide(), $("#_ddlDetailsExpenseFrequency").val("").get(0).disabled = !1, $("#_ckDetailsFrequencyTimeN").val("").get(0).disabled = !1, $("#_ckDetailsFrequencyTimeS").val("").get(0).disabled = !1, $("#_lblDetailsCheckBoxFrequencyTime").hide(), $("#_lblDetailsFrequencyTimes").hide(), $("#_lblAlertFixed").hide(), $("input#_txt_details_duo_date").val(""), geraCalendario($("input#_txt_details_duo_date")), $("#_lblDetailsCheckBoxFrequencyTime").hide(), $("#_lblExpenseRecurly").show(), $("#_lblAlertInstalment").hide(), $("#_ddlDetailsParts").val(""), $("#dv_tags").html('<textarea id="_txtTagsDescription" placeholder="Informe aqui algumas tags para identificar melhor este item..." style="height: 20px;" type="hidden"></textarea>'), $("ul.typeahead.dropdown-menu").last().remove(), $("#tags_sugestion_list").html(""), $("select#_ddl_payment_type").val(""), $("select#_ddl_payment_type_card_acquire").val("").hide(), $("input#_txtDetailsDocumentNumber").val(""), $("#_txtDetailsFrequencyTimes").val(""), $("td.column-due-date").popover({title: "<strong>O que \xe9 isso?</strong>", trigger: "hover", content: "<strong>Data da Compet\xeancia</strong> \xe9 a data de gera\xe7\xe3o da d\xedvida ou venda (ou seja, na data do documento, n\xe3o importando quando vou pagar ou receber). Se sua empresa trabalha no regime de compet\xeancia, utilize esta data para obter relat\xf3rios mais precisos.", html: !0, container: "body"}), $("input[name=ckRepeatDetailsForInstalments]").prop("checked", !1)
}
function updateMultiples() {
    var e = $("#_txtEditMultiDate"), t = $("#_txtEditMultiSuplier"), a = $("#_txtEditMultiPrice"), n = $("#_txtEditMultiCat"), i = $("#_txtEditMultiPayed"), o = "";
    return $(".ckSelectItem").each(function () {
        var e = $(this).get(0);
        if (e.checked) {
            var t = getIdFromString($(e).attr("id"));
            o += t + ","
        }
    }), CallAjaxMethod({id: o, sup: t.val(), val: a.val(), pdt: e.val(), cat: n.val(), pay: i.val()}, "/manager/expenses/update_many_ajax", function (e) {
        "ok" == e ? (updateContent(), clearEditMultiple()) : showError(e)
    }), !1
}
function clearEditMultiple() {
    $("#_txtEditMultiDate").val(""), $("#_txtEditMultiSuplier").val(""), $("#_txtEditMultiPrice").val(""), $("#_txtEditMultiCat").val(""), $("#_txtEditMultiPayed option[value='']").attr("selected", "selected"), $("#mdEditMultiple").modal("hide")
}
function editMultiples() {
    $("#mdEditMultiple").modal("show")
}
function saveOnEnter(e) {
    13 == e.keyCode && saveNewLine()
}
function getMonthCollection(e) {
    $(".month").removeClass("current-month").removeClass("active-month");
    for (var t = -2; 2 >= t; t++) {
        var a = new Date(e[2], parseFloat(e[1]) - 1, 1), n = new Date(a.setMonth(a.getMonth() + t)), i = n.getMonth() + 1, o = n.getFullYear();
        $("#m_" + (t + 3)).find(".d-month").html(getMonthNameAbr(i)), $("#m_" + (t + 3)).find(".year").html(o), $("#m_" + (t + 3)).attr("year", o).attr("month", i), dtaux[2] == o && dtaux[1] == i && $("#m_" + (t + 3)).addClass("current-month"), $zg.y == o && i == $zg.m && $("#m_" + (t + 3)).addClass("active-month")
    }
}
function nextMonth() {
    var e, t, a, n, i;
    a = $("#m_5").attr("year"), t = $("#m_5").attr("month"), n = new Date(a, parseInt(t), 1), i = new Date(n.setMonth(n.getMonth() + 2)), e = ("01/" + (i.getMonth() + 1) + "/" + i.getFullYear()).split("/"), getMonthCollection(e)
}
function prevMonth() {
    var e, t, a, n, i;
    a = $("#m_1").attr("year"), t = $("#m_1").attr("month"), n = new Date(a, parseInt(t) - 1, 1), i = new Date(n.setMonth(n.getMonth() - 3)), e = ("01/" + (i.getMonth() + 1) + "/" + i.getFullYear()).split("/"), getMonthCollection(e)
}
function thisMonth() {
    dt = new Date(dtaux[2], parseFloat(dtaux[1]) - 1, 1), $zg.m = dt.getMonth() + 1, $zg.y = dt.getFullYear(), getMonthCollection(dtaux), updateContent(), updateDateInitial(), displayActualMonthName()
}
function displayActualMonthName() {
    $("#overviewMonth, #tableCurrentMonth").html(getMonthName(parseInt($zg.m)) + " / " + $zg.y)
}
function goToMonth(e, t) {
    dt = new Date(t, parseFloat(e) - 1, 1), $zg.m = dt.getMonth() + 1, $zg.y = dt.getFullYear(), updateDateInitial(), updateContent(), displayActualMonthName()
}
function getMonthActual() {
    return dtAux = $zg.dtS.split("/"), dtN = new Date(dtAux[2], parseFloat(dtAux[1]) - 1, 1), dtN.getMonth()
}
function getYearActual() {
    return dtAux = $zg.dtS.split("/"), dtN = new Date(dtAux[2], parseFloat(dtAux[1]) - 1, 1), dtN.getFullYear()
}
function updateDateInitial() {
    var e, t;
    t = 1 == $zg.m.toString().length ? "0" + $zg.m : $zg.m, e = getMonthActual() == dt.getMonth() && dt.getFullYear() == getYearActual() ? $zg.dtS : "01/" + t + "/" + $zg.y, newDate = e
}
function selectAllLines() {
    var e = $(this).get(0).checked, t = document.getElementsByName("_ck_select_item"), a = 0, n = 0;
    for (i = 0; i < t.length; i++) {
        var o = t[i], s = o.parentElement.parentElement.parentElement.parentElement;
        o.checked = e;
        var r = getIdFromString(o.id), s = document.getElementById("tr_" + r);
        if (e) {
            var l = s.getAttribute("iptPrice");
            for (x = 1; 6 >= x; x++)
                s.children[x].className = s.children[x].className + " selected_item";
            "" != l.trim() && (n += moeda.desformatar(l)), a += 1
        } else
            for (x = 1; 6 >= x; x++)
                $(s.children[x]).removeClass("selected_item")
    }
    $("#tableSumPartialTotal").html("R$ " + moeda.formatar(n)), a > 1 ? showActionsMultipleItems(!0, a) : showActionsMultipleItems(!1, a)
}
function getPartialSum() {
    var e = 0, t = 0;
    $(".ckSelectItem").each(function () {
        $(this).attr("id");
        if (ck = $(this).get(0).checked) {
            var a = $(this).parent().parent().parent().attr("iptPrice");
            "" != a.trim() && (t += moeda.desformatar(a)), e += 1
        }
    }), $("#tableSumPartialTotal").html("R$ " + moeda.formatar(t)), e > 1 ? showActionsMultipleItems(!0, e) : showActionsMultipleItems(!1, e)
}
function verifyDeleteMultiCategory() {
    var e = 0;
    $(".ckSelectMultiCategory").each(function () {
        ck = $(this).get(0).checked, ck && (e += 1)
    }), showDeleteMultiCategory(e > 1 ? !0 : !1)
}
function showActionsMultipleItems(e, t) {
    $("#btnDeleteMultiple").get(0).disabled = !e, e ? ($("#btnDeleteMultiple, #tableSumPartial").show(), $("#tableSumPartialItens").html("<strong>" + t + "</strong> itens")) : $("#btnDeleteMultiple, #tableSumPartial").hide()
}
function checkOverdue(e, t, a) {
    $(t).find(".label-splited-item").length > 0 ? ($(t).removeClass("ibp").removeClass("ibl"), $(t).find(".column-day .dp-date").removeClass("ibp").removeClass("ibl"), $(t).find(".item").attr("title", "Esta movimenta\xe7\xf5o foi detalhada em mais itens.")) : CallAjaxMethod({e: e}, "/manager/expenses/check_is_overdue", function (e) {
        1 == e && 0 == a ? ($(t).removeClass("ibp").addClass("ibl"), $(t).find(".column-day .dp-date").removeClass("ibp").addClass("ibl"), $(t).find(".item").attr("title", "Esta movimenta\xe7\xe3o est\xe1 com o pagamento atrasado.")) : 0 == e && 1 == a ? ($(t).addClass("ibp").removeClass("ibl"), $(t).find(".column-day .dp-date").addClass("ibp").removeClass("ibl"), $(t).find(".item").attr("title", "Esta movimenta\xe7\xe3o foi efetivada.")) : 1 == a ? ($(t).addClass("ibp").removeClass("ibl"), $(t).find(".column-day .dp-date").addClass("ibp").removeClass("ibl"), $(t).find(".item").attr("title", "Esta movimenta\xe7\xe3o foi efetivada.")) : ($(t).removeClass("ibp").removeClass("ibl"), $(t).find(".column-day .dp-date").removeClass("ibp").removeClass("ibl"), $(t).find(".item").attr("title", "Esta movimenta\xe7\xe3o est\xe1 agendada"))
    })
}
function dateFormat(e) {
    var t = e.split("/");
    return t[0] + "/" + t[1]
}
function displayItems() {
    $(".onEdit .item-payed").removeClass("item").removeClass("onEdit"), $(".onEdit .edit-item").remove(), $(".onEdit .select2-container").remove(), $(".display-item").show(), $(".btn-update-item").hide(), $(".btn-exclude").show(), $("tr").find(".onEdit").removeClass("onEdit").not(".column-paid").addClass("item"), hideDetails(), onEditItem = !1, destroySelectPopovers(), hideRemoveButton()
}
function selectItem() {
    var e = $(this).parent().parent().parent();
    $(this).get(0).checked ? ($(e).find(".item,.item-payed").addClass("selected_item"), cursor = $(e).index()) : $(e).find(".item,.item-payed").removeClass("selected_item"), getPartialSum()
}
function makeEdit() {
    displayItems(), editLine($(this)), $($(this)).find("input").focus().select()
}
function editLine(e) {
    var t = $(e).parent(), a = "<input type='text' class='edit-item iptPayDate' tipo='calendario' value='" + $(t).attr("iptPayDate") + "'/>";
    $(t).find(".column-day").append(a);
    var n = "<input type='text' class='edit-item iptSuplier' value='" + $(t).attr("iptSuplier") + "' placeholder='Digite aqui uma descri\xe7\xe3o...'/>";
    if ($(t).find(".column-description").append(n), "false" == $(t).attr("splited")) {
        var i = getHtmlComboParts($(t).attr("ddlPart"));
        $(t).find(".column-paidto").append(i), $(t).find(".column-paidto").find("select").select2({allowClear: !0, placeholder: "Pessoa/Empresa", width: "98%", dropdownCss: {width: "300px"}, formatNoMatches: function (e) {
                return $(".select2-input").unbind("keyup").keyup(function (t) {
                    13 == t.keyCode && createNewPartDropDow(e)
                }), "<i>Cadastrar nova:</i><br/><a href='javascript:createNewPartDropDow(\"" + e + "\");void(0);'><strong>" + e + "</strong></a>"
            }})
    }
    var o = "<div class='edit-item icon-calc' style='display: block;'></div><input type='text' pattern='\\d*' class='edit-item iptPrice' tipo='moeda' value='" + $(t).attr("iptPrice").trim() + "' placeholder='Aqui o valor...'/>";
    $(t).find(".column-price div.holdem").append(o);
    var s = getHtmlComboCats($(t).attr("ddlCat"));
    $(t).find(".column-category").append(s), $(t).find(".column-category").find("select").select2({allowClear: !0, placeholder: "Selecione uma categoria", width: "150px", dropdownCss: {width: "300px"}, formatNoMatches: function (e) {
            return $(".select2-input").unbind("keyup").keyup(function (t) {
                13 == t.keyCode && createNewCatDropDow(e)
            }), "<i>Cadastrar novo:</i><br/><a href='javascript:createNewCatDropDow(\"" + e + "\");void(0);'><strong>" + e + "</strong></a>"
        }}), $(t).find(".edit-item").show(), $(t).find(".display-item").hide(), $(t).find(".item,.item-payed").addClass("onEdit").removeClass("item");
    var r = $(t).position().top;
    $("button#tableRowEditDetails").css("top", r + 43 + "px").show(), $("div#tableModalEditDetails").css("top", r + 43 + "px"), onEditItem = !0, setCampos(t)
}
function saveNewLine() {
    var e = "", t = "", a = newDate, n = null, i = "", o = "", s = $("#_cdC").val(), r = !1, l = $("#ddl_cost_centers").val();
    return"" == l ? (showError("Por favor, selecione uma conta para o cadastro do lan\xe7amento."), !1) : (ZP.ajaxCall("/manager/expenses/create_ajax", {sup: e, val: t, pdt: a, odt: n, cat: $zg.c, sub: i, com: o, use: s, pay: r, cct: l}, function (e) {
        if ("lockedCC" == e.status)
            return $("#btnEditCostCenter").triggerHandler("click"), showError("Est\xe1 conta est\xe1 bloqueada para lan\xe7amentos."), !1;
        if (isNaN(e[0].id))
            showError(e);
        else {
            var t = doT.template(document.getElementById("transactionTableTemp").text, void 0, void 0);
            void 0 != $("#transactionTableContent").find("tr").first().attr("id") ? $("#transactionTableContent").prepend(t(e)) : $("#transactionTableContent").html(t(e));
            var a = "#tr_" + e[0].id;
            $(a).attr("is_new", "true"), selectedItem = e[0].id, buildDllCats(a), buildDllParts(a), setCampos(a), setItemPosition()
        }
    }), !1)
}
function clickDestroyExpense(e, t) {
    var a = $(t).parent().parent(), n = a.index();
    "" != a.attr("ins") ? (itemToExclude = e, itemInstalments = a.attr("ins"), "" == itemInstalments && (itemInstalments = getIdFromString($(a).attr("id"))), $("#md_delete_instalment").modal("show"), $("#rd_delete_future").get(0).checked = !1, $("#rd_delete_all").get(0).checked = !1, $("#rd_delete_only_one").get(0).checked = !1) : confirm("Deseja excluir permanentemente este item ?") && destroyExpense(e, n)
}
function destroyInstalment() {
    var e = "";
    return $("#rd_delete_future").get(0).checked && (e = "df"), $("#rd_delete_all").get(0).checked && (e = "da"), $("#rd_delete_only_one").get(0).checked && (e = "do"), "" == e ? (alert("Por favor, selecione uma a\xe7\xe3o que deveremos tomar antes de continuarmos."), !1) : ($("#btnExcludeInstalments").html("<i class='icon-time icon-white'></i> Aguarde...").get(0).disabled = !0, CallAjaxMethod({id: itemToExclude, ins: itemInstalments, ac: e}, "/manager/expenses/destroy_instalments_ajax", function (e) {
        "ok" == e ? (updateContent(), showAlert("Itens exclu\xeddos."), $("#btnExcludeInstalments").html("<i class='icon-trash icon-white'></i> Excluir agora").get(0).disabled = !1, $("#md_delete_instalment").modal("hide")) : showError("Ops, n\xe3o pudemos excluir este item, faremos o poss\xedvel para tentar corrigir este erro. Por favor, tente novamente!\n" + e)
    }), !1)
}
function keyDeleteExpenses() {
    var e = 0;
    $(".ckSelectItem").each(function () {
        $(this).get(0).checked && (e += 1)
    }), e > 0 && confirm("Voc\xea tem certeza que deseja excluir todos estes registros ?") && $(".ckSelectItem").each(function () {
        if ($(this).get(0).checked) {
            var e = getIdFromString($(this).attr("id"));
            $("#_ckSelectAll").get(0).checked = !1, destroyExpense(e)
        }
    })
}
function destroyExpense(e, t) {
    return CallAjaxMethod({id: e.toString()}, "/manager/expenses/destroy_ajax", function (a) {
        if ("ok" == a)
            void 0 == t && (t = $("#_ckSelect_" + e).parent().parent().parent().index()), removeLine(t), getBalance(), getPartialSum();
        else {
            if ("lockedCC" == a)
                return $("#btnEditCostCenter").triggerHandler("click"), !1;
            showError(a)
        }
    }), !1
}
function removeLine(e) {
    $($("#tableTransactions").get(0).rows[e + 2]).remove(), 3 == $("#tableTransactions").get(0).rows.length ? updateContent() : displayItems()
}
function getBalance() {
    var e = $("#ddl_cost_centers").val();
    CallAjaxMethodGET(null, "/manager/user_account/get_sum_expenses_ajax?c=" + $zg.c + "&m=" + $zg.m + "&y=" + $zg.y + "&cc=" + e, function (e) {
        $("#tableSumTotal").html(e.nopayed), $("#tableSumPaid").html(e.payed), $("#tableSumDifference").html(e.difference)
    }), getBalanceAllCategories($zg.m, $zg.y, !0, e), getBalanceGeneral()
}
function getBalanceCategory() {
    var e = $("#ddl_cost_centers").val();
    CallAjaxMethodGET(null, "/manager/user_account/get_sum_expenses_ajax?c=" + $zg.c + "&m=" + $zg.m + "&y=" + $zg.y + "&cc=" + e, function (e) {
        $("#tableSumTotal").html(e.nopayed), $("#tableSumPaid").html(e.payed), $("#tableSumDifference").html(e.difference)
    })
}
function getBalanceGeneral() {
    var e = "01/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(), t = $("#ddl_cost_centers").val();
    CallAjaxMethodGET(null, "/manager/user_account/get_balance_future_ajax?date=" + e + "&d=0&cc=" + t, function (e) {
        var t = $("#spBalancePrevMonth").html(e).html();
        "true" == $("#overviewBox").attr("view-balance") && (t.indexOf("-") >= 0 ? $("#overviewPrevMonth").removeClass("positive").addClass("negative") : $("#overviewPrevMonth").removeClass("negative").addClass("positive"))
    }), getActualBalance($zg.dtS, t, getCostCenterNameGeneral(t)), CallAjaxMethodGET(null, "/manager/user_account/get_balance_future_ajax?date=" + e + "&d=1&cc=" + t, function (e) {
        var t = $("#spBalanceFuture").html(e).html();
        "true" == $("#overviewBox").attr("view-balance") && (t.indexOf("-") >= 0 ? $("#overviewFutureMonth").removeClass("positive").addClass("negative") : $("#overviewFutureMonth").removeClass("negative").addClass("positive"))
    })
}
function scrollCaixaSaldo() {
    var e = $("ul#tabCategory").offset().top, t = $("footer").height();
    $("table#overviewBalance").hide(), $(window).scroll(function () {
        var a = $(document).scrollTop(), n = $("#overviewBox").height(), i = $(window).height(), o = $(document).height() - n - $("footer").height() - 10;
        a > e ? ($("div#overviewBox").addClass("undock"), $("table#overviewBalance").show()) : ($("div#overviewBox").removeClass("undock"), $("table#overviewBalance").hide()), n + t > i && (a > o - 45 ? $("div#overviewBox").css("top", o - a + "px") : $("div#overviewBox").css("top", "40px"))
    })
}
function scrollCaixaSoma() {
    $(window).scroll(function () {
        getSumPosition()
    }), $(window).resize(function () {
        getSumPosition()
    })
}
function getSumPosition() {
    var e = $("div#tableSumContainer").offset().top - window.innerHeight - $(document).scrollTop(), t = $(window).width() - ($("#tableFooter").offset().left + $("#tableFooter").width()) + "px";
    $("div#tableSum").css("right", t), 0 > e ? $("div#tableSum").removeClass("undock") : $("div#tableSum").addClass("undock")
}
function menuCliqueDireito() {
    $("body").on("contextmenu", "tr.trExpense", function (e) {
        return idContext = getIdFromString($(this).attr("id")), $(".quickMenuCreateBill").unbind("click").click(function () {
            createBillFromQuickMenu(idContext)
        }), $(".quickMenuCreateNfe").unbind("click").click(function () {
            createInvoice()
        }), $("ul#menu-tabela").show().css({top: e.pageY + "px", left: e.pageX + "px"}).animate({opacity: 100}, 0), getContextThumbsPayed(), !1
    }), $("ul#menu-tabela").click(function () {
        $(this).hide()
    }), $("html").click(function (e) {
        1 == e.which && $("ul#menu-tabela").hide()
    }), getSelText(), setSelText()
}
function getContextThumbsPayed() {
    $("#btn-contextmenu-payed,#btn-contextmenu-nopayed").hide();
    var e = $("#tr_" + idContext).find(".ckPayed").get(0);
    void 0 != e && (e.checked ? $("#btn-contextmenu-nopayed").show() : $("#btn-contextmenu-payed").show())
}
function checkPayed() {
    $("#tr_" + idContext).find(".ckPayed").get(0).click()
}
function getSelText() {
    var e = "";
    window.getSelection ? e = window.getSelection() : document.getSelection ? e = document.getSelection() : document.selection && (e = document.selection.createRange().text), $("p.teste").text(e)
}
function setSelText() {
    $("input:focus").val($("p.teste").text())
}
function cloneItem() {
    CallAjaxMethod({e: idContext, c: $zg.c}, "/manager/expenses/clone_expense_ajax", function (e) {
        if (isNaN(e[0].id))
            showError(e);
        else {
            showAlert("Item duplicado com sucesso!");
            var t = doT.template(document.getElementById("transactionTableTemp").text, void 0, void 0);
            $(t(e)).insertBefore($("#transactionTableContent").find("#tr_" + idContext));
            var a = "#tr_" + e[0].id;
            buildDllCats(a), buildDllParts(a), setCampos(a), getBalance()
        }
    })
}
function moveItemTo(e) {
    changeExpenseCategory(idContext, e, !1)
}
function cloneItemTo(e) {
    return e == $zg.c ? (cloneItem(), !1) : void CallAjaxMethod({e: idContext, t: e, c: $zg.c}, "/manager/expenses/clone_expense_to_ajax", function (e) {
        "ok" == e ? (showAlert("Item duplicado para a categoria!"), getBalance()) : showError(e)
    })
}
function deleteItemContext() {
    $("#tr_" + idContext).find(".btn-exclude").click()
}
function getExpenseTitle(e) {
    return 1 == e ? "Esta movimenta\xe7\xe3o foi efetivada." : 2 == e ? "Esta movimenta\xe7\xe3o est\xe1 com o pagamento atrasado." : 3 == e ? "Esta movimenta\xe7\xe3o est\xe1 agendada." : 4 == e ? "Este item foi mais detalhado em outros itens" : void 0
}
function getCostCenterName(e) {
    if ("t" == $("#ddl_cost_centers").val()) {
        var t = $("#ddl_cost_centers").find("option[value='" + e + "']").text();
        return t
    }
    return""
}
function getCostCenterNameGeneral(e) {
    var t = $("#ddl_cost_centers").find("option[value='" + e + "']").text();
    return"t" == e && (t = "Todas as contas"), "n" == e && (t = "--"), t
}
function getColorPriceTransf(e) {
    return 6 == e ? "red" : "green"
}
function destroyTransfer(e) {
    if (confirm("Confirma a exclus\xe3o desta transfer\xeancia ?")) {
        {
            $("#tabCategory").find(".active").attr("id").replace("ic_", "")
        }
        CallAjaxMethod({id: e}, "/manager/expenses/destroy_transfer", function (e) {
            "ok" == e ? (showAlert("Transfer\xeancia exclu\xedda com sucesso!"), updateContentTab(), getBalance()) : showError(e)
        })
    }
}
function print_receipt(e) {
    var t = idContext;
    window.open("/manager/receipt_templates/print?i=" + t + "&tmp=" + e, "_blank")
}
function print_receipt_from_details(e) {
    var t = getIdFromString($("td.onEdit").first().parent().attr("id"));
    window.open("/manager/receipt_templates/print?i=" + t + "&tmp=" + e, "_blank")
}
function set_tag(e) {
    $("div#dv_tags div.tags input").val(e).blur()
}
function saveQuestionUpdateDateOnPaid(e) {
    ZP.ajaxCall("/users/save_question_update_date_general_settings", {vq: !e.checked}, function (e, t) {
        "success" == t && ($zg.show_update_date_question = !1)
    })
}
var cursor = -1, detailsPartId, canExclude = !1, onEditItem = !1, arrTabBalance = [], idContext = 0, newDate = "", transactionTable = [], transactionPartialTable = [], transactionPartialTableStep = 20, oldLinePrice, jsonExpenseAttachment;
$(document).ready(function () {
    setGeneralActions(), printTransactions(), hideSumPopup(), refreshPremiumMessage(), getSumPosition(), $("ul#tabCategory .itemTab a").click(function () {
        var e = $(this).parent(".itemTab").attr("id").replace("ic_", "");
        switch (e) {
            case"1":
                user_permissions.aba_recebimento_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"2":
                user_permissions.aba_despesa_fixa_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"3":
                user_permissions.aba_despesa_variavel_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"4":
                user_permissions.aba_pessoal_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"5":
                user_permissions.aba_imposto_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"6":
                user_permissions.aba_transferencia_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"7":
                user_permissions.aba_transferencia_create ? $("#btnNewItem").show() : $("#btnNewItem").hide();
                break;
            case"t":
                user_permissions.aba_transferencia_create ? $("#btnNewItem").show() : $("#btnNewItem").hide()
            }
    })
}), $(window).bind("load", function () {
    hideRemoveButton()
});
var update_date_t, update_date_i, update_date_v, itemToExclude = null, itemInstalments = null;