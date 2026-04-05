# RepoRanger - Manual Testing (QA Portfolio Version)

## Test Scope

This document covers full manual testing of the RepoRanger application including:

* UI rendering
* API integration
* Data accuracy
* Sorting & filtering
* Chart behavior
* Dark mode
* Edge cases
* Error handling

---

# Test Cases

| ID | Feature | Test Case | Steps | Expected Result | Status |
| -- | ------- | --------- | ----- | --------------- | ------ |

### 🔹 Page & UI

| TC-001 | Page Load | Open application | Open page in browser | Page loads without errors | ✅ Pass |
| TC-002 | UI | Verify heading | Observe top section | Title and subtitle visible | ✅ Pass |
| TC-003 | UI | Layout structure | Inspect page | All sections visible | ✅ Pass |
| TC-004 | UI | No console errors | Open DevTools → Console | No critical errors | ✅ Pass |

---

### 🔹 API & Data

| TC-005 | API | Fetch repos | Load page | Repos appear | ✅ Pass |
| TC-006 | API | Data accuracy | Compare with GitHub | Matches real data | ✅ Pass |
| TC-007 | API | Empty response handling | Simulate no repos | Page does not crash | ✅ Pass |
| TC-008 | API | Network failure | Disable internet | UI does not break completely | ⚠️ Needs improvement |

---

### 🔹 Summary

| TC-009 | Summary | Total repos | Count cards | Matches summary | ✅ Pass |
| TC-010 | Summary | Total stars | Sum values | Matches summary | ✅ Pass |
| TC-011 | Summary | Total forks | Sum values | Matches summary | ✅ Pass |
| TC-012 | Summary | Total commits | Compare values | Matches summary | ✅ Pass |

---

### 🔹 Repository Cards

| TC-013 | Repo Card | Repo name | Inspect cards | Visible & clickable | ✅ Pass |
| TC-014 | Repo Card | Repo link | Click repo | Opens GitHub | ✅ Pass |
| TC-015 | Repo Card | Missing description | Repo without description | Shows fallback text | ✅ Pass |
| TC-016 | Repo Card | Language display | Inspect card | Shows language | ✅ Pass |
| TC-017 | Repo Card | Missing language | Repo without language | Shows "Unknown" | ✅ Pass |
| TC-018 | Repo Card | Commit count | Inspect card | Shows number | ✅ Pass |
| TC-019 | Repo Card | Date format | Inspect card | Readable date | ✅ Pass |
| TC-020 | Repo Card | Hover effect | Hover card | Smooth animation | ✅ Pass |

---

### 🔹 Sorting

| TC-021 | Sorting | Sort by stars | Click button | Sorted descending | ✅ Pass |
| TC-022 | Sorting | Sort by forks | Click button | Sorted descending | ✅ Pass |
| TC-023 | Sorting | Sort by push | Click button | Sorted by date | ✅ Pass |
| TC-024 | Sorting | Sort by commits | Click button | Sorted by commits | ✅ Pass |
| TC-025 | Sorting | Rapid clicks | Click buttons repeatedly | No crash or duplication | ✅ Pass |

---

### 🔹 Filtering

| TC-026 | Filter | Dropdown populated | Open dropdown | Languages listed | ✅ Pass |
| TC-027 | Filter | Filter language | Select language | Only matching repos | ✅ Pass |
| TC-028 | Filter | Reset filter | Select "All" | All repos visible | ✅ Pass |
| TC-029 | Filter | Filter + sort | Apply both | Works correctly | ✅ Pass |
| TC-030 | Filter | No results case | Select rare language | Empty view handled | ⚠️ Needs improvement |

---

### 🔹 Chart

| TC-031 | Chart | Chart visible | Load page | Chart displayed | ✅ Pass |
| TC-032 | Chart | Data accuracy | Compare with repos | Matches commits | ✅ Pass |
| TC-033 | Chart | Sorting update | Sort repos | Chart updates | ✅ Pass |
| TC-034 | Chart | Filtering update | Apply filter | Chart updates | ✅ Pass |
| TC-035 | Chart | Re-render | Multiple actions | No duplicates | ✅ Pass |
| TC-036 | Chart | Many repos | Large dataset | Still readable | ⚠️ Limited |

---

### 🔹 Dark Mode

| TC-037 | Dark Mode | Enable | Click toggle | Dark theme applied | ✅ Pass |
| TC-038 | Dark Mode | Disable | Click again | Light theme restored | ✅ Pass |
| TC-039 | Dark Mode | Stability | Toggle multiple times | No issues | ✅ Pass |

---

### 🔹 Edge Cases & Stability

| TC-040 | Edge Case | Repo without commits | Inspect repo | Shows 0 commits | ✅ Pass |
| TC-041 | Edge Case | Long repo names | Inspect chart | Still readable | ⚠️ Limited |
| TC-042 | Edge Case | Large number of repos | Load many repos | Performance acceptable | ⚠️ Medium |
| TC-043 | Edge Case | API rate limit | Trigger multiple calls | Possible failure | ⚠️ Risk |
| TC-044 | Edge Case | Invalid username | Change username | No crash | ⚠️ Needs handling |

---

# 🐞 Bug Report Section

## Bug #1 - No network error handling

* **Severity:** Medium
* **Description:** If API request fails, UI does not show message
* **Expected:** Show "Failed to load data"
* **Actual:** Silent failure

---

## Bug #2 - Empty filter state

* **Severity:** Low
* **Description:** When no repos match filter, page looks empty
* **Expected:** Show "No repositories found"
* **Actual:** Blank section

---

## Bug #3 - Chart readability with many repos

* **Severity:** Low
* **Description:** Chart becomes crowded with many repos
* **Expected:** Limit or scroll
* **Actual:** Hard to read

---

## Bug #4 - API rate limit risk

* **Severity:** Medium
* **Description:** Too many commit requests per repo
* **Expected:** Optimized requests or fallback
* **Actual:** Risk of 403 errors

---

# 📊 Test Summary

* Total Test Cases: **44**
* Passed: **36**
* Needs Improvement: **8**
* Failed: **0**

---

# ✅ Conclusion

The application is:

* stable
* functional
* visually consistent
* suitable for portfolio presentation

Minor improvements can be made in:

* error handling
* empty states
* chart scalability

Overall quality: **Very Good (Junior QA Portfolio Ready)**
